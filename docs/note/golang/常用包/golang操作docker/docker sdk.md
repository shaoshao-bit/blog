# docker sdk

> 📌Docker SDK 提供了与 Docker daemon 交互的接口，官方支持 Python 和 Go，其他热门语言也有对应的第三方库

## 环境准备

1.配置Docker环境信息

使用 Docker Daemon 要求版本在 18.09 以上，本地的 Docker 客户端也要求在 19.03 以上，不然之后尝试连接时会报错：

```bash
[] error during connect: Get "http://docker/v1.24/images/json": command [] has exited with exit status 255, please make sure the URL is valid, and Docker 18.09 or
 later is installed on the remote host: stderr=ssh: connect to host: Connection refused
```

### 安装Go SDK

按照 [官网-Install the SDKs](https://docs.docker.com/engine/api/sdk/ "官网-Install the SDKs") 的步骤，下载依赖即可：

```bash
$ go get github.com/docker/docker/client
```

### 连接本地Docker Daemon

#### 初始化客户端对象

这里直接连接本地的Dokcer Daemon，不需要过多配置，直接用环境变量的参数初始化客户端即可。

```vim&#x20;script
// NewEnvClient 直接使用环境变量中的 DOCKER_HOST, DOCKER_TLS_VERIFY, DOCKER_CERT_PATH, DOCKER_API_VERSION 配置
cl, err := client.NewEnvClient()
```

### 连接远程

```vim&#x20;script
cl, err := client.NewClient("tcp://192.168.64.1:2375", "", nil, nil)
```

注意，这里的2379端口需要配置服务端docker且开放端口。

#### 配置docker

编辑docker的启动文件

```vim&#x20;script
vim /usr/lib/systemd/system/docker.service
-----
# 增加-H tcp://0.0.0.0:2375
ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H fd:// --containerd=/run/containerd/containerd.sock

```

```bash
# 重载守护进程
systemctl daemon-reload
# 重新启动docker
systemctl restart docker.service

```
