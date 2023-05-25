# dd

> 📌复制文件并对原为文件的内容进行转换和格式化处理

### 语法

```bash
dd [选项]
```

### 选项

```vim&#x20;script
bs=<字节数>:将ibs（输入）与obs（输出）设成指定的字节数；
cbs=<字节数>:转换时，每次只转换指定的字节数；
conv=<关键字>：指定文件准换的方式；
count=<区块数>：仅读取指定的区块数；
ibs=<字节数>：每次读取的字节数；
obs=<字节数>：每次输出的字节数；
of=<文件>：输出到文件；
seek=<区块数>：一开始输出时，跳过指定的区块数；
skip=<区块数>：一开始读取时，跳过指定的区块数；
--help：帮助；
--version：显示版本信息。

```

### 实例

```bash
root@host:~# dd if=/dev/zero of=ran.txt bs=1M count=1
1+0 records in
1+0 records out
1048576 bytes (1.0 MB, 1.0 MiB) copied, 0.00163339 s, 642 MB/s
root@host:~# du -sh *
1.0M    ran.txt
```

*   **if** 代表输入文件。如果不指定if，默认就会从stdin中读取输入。

*   **of** 代表输出文件。如果不指定of，默认就会将stdout作为默认输出。

*   **bs** 代表字节为单位的块大小。

*   **count** 代表被复制的块数。

*   **/dev/zero** 是一个字符设备，会不断返回0值字节（\0）。

#### 获取随机字符串

```bash
root@host:~# dd if=/dev/urandom bs=1 count=15|base64 -w 0
15+0 records in
15+0 records out
ItQWSoc7Vp9o8Arqmrip15 bytes copied, 0.000271065 s, 55.3 kB/s
```

#### 使用dd命令刻录manjaro镜像

```bash
dd if=manjaro.iso of=/dev/sda1(要刻录的U盘) bs=4M
```

#### 毁天灭地

```bash
dd if=/dev/random of=/
```
