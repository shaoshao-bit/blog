# 挂载lvm

```vim&#x20;script
#!/bin/bash

disk="/dev/vdb"
function mount_disk(){
   mkdir -p /data
   #默认是vdb的盘
   printf "
###########################################
#       该脚本用于挂载磁盘
#               挂载的位置为/data
###########################################
"
  echo y|pvcreate $disk
  vgcreate datavg $disk
  echo y|lvcreate  -n datalv -l +100%FREE datavg
  mkfs.xfs  -n ftype=1 /dev/datavg/datalv

  echo "/dev/datavg/datalv /data  xfs defaults 0 0" >> /etc/fstab
  mount -a
}

function del_partition(){
  #首先判断/dev/vdb是否有分区，如果有，删除
fdisk -l $disk|grep -E 'Device|设备'
if [ $? -eq 0 ];then
    #开始删除分区
  del_p
  echo "原有分区已删除"
fi
}

function del_p(){
fdisk $disk << EOF
d
w
EOF
}

function del_lvm(){
    lvs|grep LV
    if [ $? -eq 0 ];then
    vgname=`pvs|grep vdb|awk '{print $2}'`
    lvname=`lvs|grep $vgname|awk 'NR==1{print $1}'`

    echo y|lvremove /dev/$vgname/$lvname
    vgremove $vgname
    pvremove $disk
  fi

}

if  rpm -q lvm2 &>/dev/null
then
  del_partition
  del_lvm
  mount_disk
else
  yum makecache &>/dev/null && yum -y install lvm2 &>/dev/null
  if [ $? -ne 0 ];then
    echo "无法使用yum安装lvm2，请使用另外一种挂盘方式"
    exit
  fi
fi
```
