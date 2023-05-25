# Linux挂载磁盘

### 查看设备

```bash
# lsblk
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
vdb    253:16   0  500G  0 disk
└─vdb1 253:17   0  500G  0 part
sr0     11:0    1 1024M  0 rom
vda    253:0    0   50G  0 disk
├─vda2 253:2    0 49.5G  0 part /
└─vda1 253:1    0  500M  0 part /boot
```

### 删除旧分区并创建新分区

```bash
fdisk
d：删除
n：创建 -- p:主分区
p: 显示分区
```

```bash
# fdisk /dev/vdb
Welcome to fdisk (util-linux 2.23.2).

Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Command (m for help): p

Disk /dev/vdb: 536.9 GB, 536870912000 bytes, 1048576000 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk label type: dos
Disk identifier: 0x00000000

   Device Boot      Start         End      Blocks   Id  System
/dev/vdb1               1   419430399   209715199+  ee  GPT

Command (m for help): d
Selected partition 1
Partition 1 is deleted

Command (m for help): n
Partition type:
   p   primary (0 primary, 0 extended, 4 free)
   e   extended
Select (default p): p
Partition number (1-4, default 1):
First sector (2048-1048575999, default 2048):
Using default value 2048
Last sector, +sectors or +size{K,M,G} (2048-1048575999, default 1048575999):
Using default value 1048575999
Partition 1 of type Linux and of size 500 GiB is set

Command (m for help): w
The partition table has been altered!

Calling ioctl() to re-read partition table.
Syncing disks.
```

### 格式化磁盘

```bash
# 格式化磁盘之前可能需要更新分区表
# partprobe
# mkfs.ext4 /dev/vdb1
mke2fs 1.42.9 (28-Dec-2013)
Filesystem label=
OS type: Linux
Block size=4096 (log=2)
Fragment size=4096 (log=2)
Stride=0 blocks, Stripe width=0 blocks
32768000 inodes, 131071744 blocks
6553587 blocks (5.00%) reserved for the super user
First data block=0
Maximum filesystem blocks=2279604224
4000 block groups
32768 blocks per group, 32768 fragments per group
8192 inodes per group
Superblock backups stored on blocks:
        32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,
        4096000, 7962624, 11239424, 20480000, 23887872, 71663616, 78675968,
        102400000

Allocating group tables: done
Writing inode tables: done
Creating journal (32768 blocks): done
Writing superblocks and filesystem accounting information: done
```

### 挂载磁盘

```bash
# 创建挂载点
[root@template yyuser]# mkdir /data
# 挂载磁盘到目录
[root@template yyuser]# mount /dev/vdb1 /data
# 设置开机自动挂载
[root@template yyuser]# vim /etc/fstab
```
