# 连接远程docker

使用`client.NewClientWithOpts` 方法

## 用法

方法原型

```vim&#x20;script
func NewClientWithOpts(ops ...Opt) (*Client, error) {}
```

接受参数

1.`FromEnv`

从环境变量中加载配置，不需要参数

2.`WithHost`

手动填写host信息

```vim&#x20;script
func WithHost(host string) Opt {}
```

3.`WithVersion`

选择docker api版本，默认为最新版本

```vim&#x20;script
func WithVersion(version string) Opt {}
```

4.`WithAPIVersionNegotiation`

为客户端启用自动API版本协商。启用此选项后，客户端会自动协商发出请求时要使用的API版本。API版本协商在第一次请求时执行；后续请求将不会重新协商。

```vim&#x20;script
func WithAPIVersionNegotiation() Opt {}

```

5.`WithHTTPClient`

使用指定http客户端重写客户端

```vim&#x20;script
func WithHTTPClient(client *http.Client) Opt {}
```

6.`WithHTTPHeaders`

重写http headers

```vim&#x20;script
func WithHTTPHeaders(headers map[string]string) Opt {}
```

7.`WithTimeout`

设置超时时间

```vim&#x20;script
func WithTimeout(timeout time.Duration) Opt {}
```

8.`WithScheme`

设置网络协议

```vim&#x20;script
func WithScheme(scheme string) Opt {}
```

9.`WithTLSClientConfig`

应用tls设置

```vim&#x20;script
func WithTLSClientConfig(cacertPath, certPath, keyPath string) Opt {}
```

10.`WithDialContext`

暂未知用途

> WithDialContext applies the dialer to the client transport. This can be used to set the Timeout and KeepAlive settings of the client.
> WithDialContext将拨号程序应用于客户端传输。这可用于设置客户端的超时和保留设置。

```vim&#x20;script
func WithDialContext(
         dialContext func(ctx context.Context, network, addr string) (net.Conn, error)
         ) Opt {}
```
