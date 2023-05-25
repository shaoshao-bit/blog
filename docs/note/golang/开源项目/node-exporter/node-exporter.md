

## 初始化

> 下面均以`uname` 模块为例。

### const

`main` 包调用`collector` 包，创建`collector` 包下面各个go文件的`const` 常量。在`collector.go` 文件里面：

```go
const namespace = "node"
const (
  defaultEnabled  = true
  defaultDisabled = false
)

```

### var

`uname.go` 文件中：

```go
var unameDesc = prometheus.NewDesc(
  prometheus.BuildFQName(namespace, "uname", "info"),
  "Labeled system information as provided by the uname system call.",
  []string{
    "sysname",
    "release",
    "version",
    "machine",
    "nodename",
    "domainname",
  },
  nil,
)

```

该变量为初始化的prometheus变量，在初始化过程中不过多使用，仅初始化。

`collector.go` 文件中：

```go
var (
  scrapeDurationDesc = prometheus.NewDesc(
    prometheus.BuildFQName(namespace, "scrape", "collector_duration_seconds"),
    "node_exporter: Duration of a collector scrape.",
    []string{"collector"},
    nil,
  )
  scrapeSuccessDesc = prometheus.NewDesc(
    prometheus.BuildFQName(namespace, "scrape", "collector_success"),
    "node_exporter: Whether a collector succeeded.",
    []string{"collector"},
    nil,
  )
)

```

定义各采集器的采集时间以及采集状态，web端输出内容如下：

```text
# HELP node_scrape_collector_duration_seconds node_exporter: Duration of a collector scrape.
# TYPE node_scrape_collector_duration_seconds gauge
node_scrape_collector_duration_seconds{collector="arp"} 0.000107023
node_scrape_collector_duration_seconds{collector="uname"} 1.5899e-05
---
# HELP node_scrape_collector_success node_exporter: Whether a collector succeeded.
# TYPE node_scrape_collector_success gauge
node_scrape_collector_success{collector="arp"} 1
node_scrape_collector_success{collector="uname"} 1

```

```go
var (
  factories              = make(map[string]func(logger log.Logger) (Collector, error))
  initiatedCollectorsMtx = sync.Mutex{}
  initiatedCollectors    = make(map[string]Collector)
  collectorState         = make(map[string]*bool)
  forcedCollectors       = map[string]bool{} // collectors which have been explicitly enabled or disabled
)
```

### init

```go
func init() {
  registerCollector("uname", defaultEnabled, newUnameCollector)
}
```

执行同包下的`registerCollector`函数，`collector`包下公共函数均位于`collector.go` 文件下，函数拥有三个参数，本模块名为`uname` ，默认开启，执行时调用`newUnameCollector` 函数。

下面是`registerCollector` 函数。

```go
func registerCollector(collector string, isDefaultEnabled bool, factory func(logger log.Logger) (Collector, error)) {
  var helpDefaultState string
  if isDefaultEnabled {
    helpDefaultState = "enabled"
  } else {
    helpDefaultState = "disabled"
  }

  flagName := fmt.Sprintf("collector.%s", collector)
  flagHelp := fmt.Sprintf("Enable the %s collector (default: %s).", collector, helpDefaultState)
  defaultValue := fmt.Sprintf("%v", isDefaultEnabled)

  flag := kingpin.Flag(flagName, flagHelp).Default(defaultValue).Action(collectorFlagAction(collector)).Bool()
  collectorState[collector] = flag

  factories[collector] = factory
}
```

在执行`node_exporter -h` 时，关于`uname` 部分的内容如下：

```bash
--collector.uname          Enable the uname collector (default: enabled).
```

执行`flag:=...` 将相应采集器注册进启动参数，设置参数名以及其释义，并指定默认值，及`init` 函数中所定义的内容。在程序读取到相应参数，通过`Action` 下的定义去执行`collectorFlagAction（）` 函数。

```go
func collectorFlagAction(collector string) func(ctx *kingpin.ParseContext) error {
  return func(ctx *kingpin.ParseContext) error {
    forcedCollectors[collector] = true
    return nil
  }
}
```

`collectorFlagAction` 函数定义接收采集器名称，返回一个`func(ctx *kingpin.ParseContext) error` 类型的函数，这里使用匿名函数的方式执行`forcedCollectors[collector] = true` 执行复制操作

最后，为`collectorState` 与`collectorState` 复制

至此，程序初始化完成，开始从主函数执行

## 程序启动

程序从main函数开始执行

首先是程序本身运行所需要的一些变量。

```go
var (
    listenAddress = kingpin.Flag(
      "web.listen-address",
      "Address on which to expose metrics and web interface.",
    ).Default(":9100").String()
    metricsPath = kingpin.Flag(
      "web.telemetry-path",
      "Path under which to expose metrics.",
    ).Default("/metrics").String()
    disableExporterMetrics = kingpin.Flag(
      "web.disable-exporter-metrics",
      "Exclude metrics about the exporter itself (promhttp_*, process_*, go_*).",
    ).Bool()
    maxRequests = kingpin.Flag(
      "web.max-requests",
      "Maximum number of parallel scrape requests. Use 0 to disable.",
    ).Default("40").Int()
    disableDefaultCollectors = kingpin.Flag(
      "collector.disable-defaults",
      "Set all collectors to disabled by default.",
    ).Default("false").Bool()
    configFile = kingpin.Flag(
      "web.config",
      "[EXPERIMENTAL] Path to config yaml file that can enable TLS or authentication.",
    ).Default("").String()
  )
```

如上，依次为：监听地址、请求路径、是否显示node-exporter本身信息、最大并发数、是否关闭默认采集项、TLS配置。

初始化一些配置

```go
// 日志级别与日志显示格式
promlogConfig := &promlog.Config{}
flag.AddFlags(kingpin.CommandLine, promlogConfig)
// 版本等信息
kingpin.Version(version.Print("node_exporter"))
// 输出方式
kingpin.CommandLine.UsageWriter(os.Stdout)
kingpin.HelpFlag.Short('h')
kingpin.Parse()
logger := promlog.New(promlogConfig)
```

> 📌version.Print的部分信息是在编译阶段写入的

若参数为关闭默认采集项，执行`DisableDefaultCollectors` 函数。

```go
if *disableDefaultCollectors {
    collector.DisableDefaultCollectors()
  }
```

`DisableDefaultCollectors` 函数中，循环采集器列表，若无参数传入指定采集，则将状态改变为false

```go
func DisableDefaultCollectors() {
  for c := range collectorState {
    if _, ok := forcedCollectors[c]; !ok {
      *collectorState[c] = false
    }
  }
}
```

打印启动日志

```go
level.Info(logger).Log("msg", "Starting node_exporter", "version", version.Info())
level.Info(logger).Log("msg", "Build context", "build_context", version.BuildContext())
```

判断用户身份，如果执行用户为root，则发出警告

```go
if user, err := user.Current(); err == nil && user.Uid == "0" {
    level.Warn(logger).Log("msg", "Node Exporter is running as root user. This exporter is designed to run as unprivileged user, root is not required.")
  }
```

> 📌下面部分先略过，看后面

```go
http.Handle(*metricsPath, newHandler(!*disableExporterMetrics, *maxRequests, logger))
```

监听`/` 路由，访问根路径引导访问metrice路径

```go
http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte(`<html>
      <head><title>Node Exporter</title></head>
      <body>
      <h1>Node Exporter</h1>
      <p><a href="` + *metricsPath + `">Metrics</a></p>
      </body>
      </html>`))
  })
```

启动http服务

```go
level.Info(logger).Log("msg", "Listening on", "address", *listenAddress)
  server := &http.Server{Addr: *listenAddress}
  if err := web.ListenAndServe(server, *configFile, logger); err != nil {
    level.Error(logger).Log("err", err)
    os.Exit(1)
  }
```

回头看这段代码

```go
http.Handle(*metricsPath, newHandler(!*disableExporterMetrics, *maxRequests, logger))
```

`http.Handle` 与`http.HandleFunc` 最主要的区别是前者传入的第二个参数为`Handler` 类型，它是一个接口类型，实现了`ServeHTTP` 方法。

```go
type Handler interface {
  ServeHTTP(ResponseWriter, *Request)
}
```

```go
func newHandler(includeExporterMetrics bool, maxRequests int, logger log.Logger) *handler {
  h := &handler{
    exporterMetricsRegistry: prometheus.NewRegistry(),
    includeExporterMetrics:  includeExporterMetrics,
    maxRequests:             maxRequests,
    logger:                  logger,
  }
  if h.includeExporterMetrics {
    h.exporterMetricsRegistry.MustRegister(
      promcollectors.NewProcessCollector(promcollectors.ProcessCollectorOpts{}),
      promcollectors.NewGoCollector(),
    )
  }
  if innerHandler, err := h.innerHandler(); err != nil {
    panic(fmt.Sprintf("Couldn't create metrics handler: %s", err))
  } else {
    h.unfilteredHandler = innerHandler
  }
  return h
}
```
