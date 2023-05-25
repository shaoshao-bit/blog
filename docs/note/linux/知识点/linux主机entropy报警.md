

## entropy的重要性

1.  主机的随机数生成器/dev/random,/dev/urandom依赖于足够的entropy

2.  /dev/random是一个阻塞设备，它将一直延迟到有足够的entropy才产生真正的随机数据

3.  当没有足够的entropy时会造成依赖/dev/random的应用程序阻塞，进而影响集群稳定性和可用性

## 关于entropy的常用操作

#### 查看当前可用entropy

```bash
cat /proc/sys/kernel/random/entropy_avail

```

注：最好保持在1000以上

#### 查看最大entropy资源量

```bash

cat /proc/sys/kernel/random/poolsize
4096
```

#### 实时查看entropy资源量的变化

```go
watch -n 1 cat /proc/sys/kernel/random/entropy_avail
```

## 增加主机entropy资源量的方法

因为集群主机有可用的entropy源，所有这里我们使用rngd服务来增加entropy
识别系统中可用的entropy源：

```bash
$rngd -v
hwrng: no available rng
Unable to open file: /dev/tpm0
Available entropy sources:

```

#### DRNG

#### 1.安装rngd服务

```bash
yum install -y rng-tools;
```

#### 2.启动服务

```bash
service rngd start;
chkconfig rngd on;
```

#### 3.验证

```bash
cat /proc/sys/kernel/random/entropy_avail;
cat /dev/random | rngtest -c 1000;

```

注：在没有充足的entropy主机中，它可能需要几分钟甚至更长时间,有充足的entropy主机上，几秒钟就能完成
