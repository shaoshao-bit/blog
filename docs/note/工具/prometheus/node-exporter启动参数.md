## 目录


# node-exporter启动参数

## 程序运行参数

#### 监听接口

配置服务监听的ip与端口

```bash
--web.listen-address=":9100"
```

#### 访问路径

```bash
--web.telemetry-path="/metrics"
```

#### 最大并行请求数

设置为0时禁止并发请求

```bash
--web.max-requests=40
```

#### 设置禁用所有默认项

```bash
--collector.disable-defaults
```

#### 禁止显示node-exporter自身

包括(promhttp\_ \*, process\_ \*, go\_ \*)

```bash
--web.disable-exporter-metrics
```

#### 日志级别

支持 \[debug, info, warn, error]

```bash
--log.level=info
```

#### 日志格式

支持 \[logfmt, json]

```bash
--log.format=logfmt 
```

#### web配置

\[EXPERIMENTAL] Path to config yaml file that can enable TLS or authentication.

```bash
--web.config=""
```

## 监控参数

*   arp

    > 数据取自 `/proc/net/arp`

    `—collector.arp`       enabled

    ```text
    node_arp_entries{device="cni0"} 2
    node_arp_entries{device="eth0"} 7
    node_arp_entries{device="flannel.1"} 2

    ```

    可选参数：

    是否包含指定设备

    `--collector.arp.device-include=COLLECTOR.ARP.DEVICE-INCLUDE`&#x20;

    `--collector.arp.device-exclude=COLLECTOR.ARP.DEVICE-EXCLUDE`&#x20;

*   bacache

*   uname

    > linux命令 uname -a

    `—collector.uname`      enabled

    ```text
    node_uname_info{domainname="(none)",machine="x86_64",nodename="master",release="4.18.0-348.7.1.el8_5.x86_64",sysname="Linux",version="#1 SMP Wed Dec 22 13:25:12 UTC 2021"} 1
    ```

| Name             | Description                                                                                                   | OS                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| arp              | Exposes ARP statistics from `/proc/net/arp`.                                                                  | Linux                                                                                                              |
| bcache           | Exposes bcache statistics from `/sys/fs/bcache/`.                                                             | Linux                                                                                                              |
| bonding          | Exposes the number of configured and active slaves of Linux bonding interfaces.                               | Linux                                                                                                              |
| btrfs            | Exposes btrfs statistics                                                                                      | Linux                                                                                                              |
| boottime         | Exposes system boot time derived from the `kern.boottime` sysctl.                                             | Darwin, Dragonfly, FreeBSD, NetBSD, OpenBSD, Solaris                                                               |
| conntrack        | Shows conntrack statistics (does nothing if no `/proc/sys/net/netfilter/` present).                           | Linux                                                                                                              |
| cpu              | Exposes CPU statistics                                                                                        | Darwin, Dragonfly, FreeBSD, Linux, Solaris, OpenBSD                                                                |
| cpufreq          | Exposes CPU frequency statistics                                                                              | Linux, Solaris                                                                                                     |
| diskstats        | Exposes disk I/O statistics.                                                                                  | Darwin, Linux, OpenBSD                                                                                             |
| dmi              | Expose Desktop Management Interface (DMI) info from `/sys/class/dmi/id/`                                      | Linux                                                                                                              |
| edac             | Exposes error detection and correction statistics.                                                            | Linux                                                                                                              |
| entropy          | Exposes available entropy.                                                                                    | Linux                                                                                                              |
| exec             | Exposes execution statistics.                                                                                 | Dragonfly, FreeBSD                                                                                                 |
| fibrechannel     | Exposes fibre channel information and statistics from `/sys/class/fc_host/`.                                  | Linux                                                                                                              |
| filefd           | Exposes file descriptor statistics from `/proc/sys/fs/file-nr`.                                               | Linux                                                                                                              |
| filesystem       | Exposes filesystem statistics, such as disk space used.                                                       | Darwin, Dragonfly, FreeBSD, Linux, OpenBSD                                                                         |
| hwmon            | Expose hardware monitoring and sensor data from `/sys/class/hwmon/`.                                          | Linux                                                                                                              |
| infiniband       | Exposes network statistics specific to InfiniBand and Intel OmniPath configurations.                          | Linux                                                                                                              |
| ipvs             | Exposes IPVS status from `/proc/net/ip_vs` and stats from `/proc/net/ip_vs_stats`.                            | Linux                                                                                                              |
| loadavg          | Exposes load average.                                                                                         | Darwin, Dragonfly, FreeBSD, Linux, NetBSD, OpenBSD, Solaris                                                        |
| mdadm            | Exposes statistics about devices in `/proc/mdstat` (does nothing if no `/proc/mdstat` present).               | Linux                                                                                                              |
| meminfo          | Exposes memory statistics.                                                                                    | Darwin, Dragonfly, FreeBSD, Linux, OpenBSD                                                                         |
| netclass         | Exposes network interface info from `/sys/class/net/`                                                         | Linux                                                                                                              |
| netdev           | Exposes network interface statistics such as bytes transferred.                                               | Darwin, Dragonfly, FreeBSD, Linux, OpenBSD                                                                         |
| netstat          | Exposes network statistics from `/proc/net/netstat`. This is the same information as `netstat -s`.            | Linux                                                                                                              |
| nfs              | Exposes NFS client statistics from `/proc/net/rpc/nfs`. This is the same information as `nfsstat -c`.         | Linux                                                                                                              |
| nfsd             | Exposes NFS kernel server statistics from `/proc/net/rpc/nfsd`. This is the same information as `nfsstat -s`. | Linux                                                                                                              |
| nvme             | Exposes NVMe info from `/sys/class/nvme/`                                                                     | Linux                                                                                                              |
| os               | Expose OS release info from `/etc/os-release` or `/usr/lib/os-release`                                        | *any*                                                                                                              |
| powersupplyclass | Exposes Power Supply statistics from `/sys/class/power_supply`                                                | Linux                                                                                                              |
| pressure         | Exposes pressure stall statistics from `/proc/pressure/`.                                                     | Linux (kernel 4.20+ and/or [CONFIG\_PSI](https://www.kernel.org/doc/html/latest/accounting/psi.html "CONFIG_PSI")) |
| rapl             | Exposes various statistics from `/sys/class/powercap`.                                                        | Linux                                                                                                              |
| schedstat        | Exposes task scheduler statistics from `/proc/schedstat`.                                                     | Linux                                                                                                              |
| selinux          | Exposes SELinux statistics.                                                                                   | Linux                                                                                                              |
| sockstat         | Exposes various statistics from `/proc/net/sockstat`.                                                         | Linux                                                                                                              |
| softnet          | Exposes statistics from `/proc/net/softnet_stat`.                                                             | Linux                                                                                                              |
| stat             | Exposes various statistics from `/proc/stat`. This includes boot time, forks and interrupts.                  | Linux                                                                                                              |
| tapestats        | Exposes statistics from `/sys/class/scsi_tape`.                                                               | Linux                                                                                                              |
| textfile         | Exposes statistics read from local disk. The `--collector.textfile.directory` flag must be set.               | *any*                                                                                                              |
| thermal          | Exposes thermal statistics like `pmset -g therm`.                                                             | Darwin                                                                                                             |
| thermal\\\_zone  | Exposes thermal zone & cooling device statistics from `/sys/class/thermal`.                                   | Linux                                                                                                              |
| time             | Exposes the current system time.                                                                              | *any*                                                                                                              |
| timex            | Exposes selected adjtimex(2) system call stats.                                                               | Linux                                                                                                              |
| udp\_queues      | Exposes UDP total lengths of the rx\_queue and tx\_queue from `/proc/net/udp` and `/proc/net/udp6`.           | Linux                                                                                                              |
| uname            | Exposes system information as provided by the uname system call.                                              | Darwin, FreeBSD, Linux, OpenBSD                                                                                    |
| vmstat           | Exposes statistics from `/proc/vmstat`.                                                                       | Linux                                                                                                              |
| xfs              | Exposes XFS runtime statistics.                                                                               | Linux (kernel 4.4+)                                                                                                |
| zfs              | Exposes [ZFS](http://open-zfs.org/ "ZFS") performance statistics.                                             | FreeBSD, [Linux](http://zfsonlinux.org/ "Linux"), Solaris                                                          |

## 过滤请求

/metrics?collect[]=arp&collect[]=uname
