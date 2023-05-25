# waitgroup锁释放时机问题

伪代码：

```go
var wg sync.WaitGroup
func A(){

  data_list = getData()
  for data := range data_list{
    wg.Add(1)
    go B(data)
  }
  go func(){
    for value := range channel{
      map[value.id]=value
    }
  }()
  wg.wait()
  for list{
    list.append(map)
  }
  return list
}

func B(data,cahnnel){
  defer wg.Done()
  // do something and get value
  channel <- value
}

```

### 问题

运行时发现，每次返回的值均有不同，且存在缺失

在通道取值的循环中添加输出，数据正常

在wg.wait下面的循环中输出，打印的数据仍然正常，但此时，程序返回内容完整

### 原因

B函数将所有数据写入通道中后便释放wg锁，导致wg.wait提前结束阻塞，在将通道中的值写入map之前，便已经完成对list的写入，因此返回数据存在一定随机，使用fmt.println()后会阻塞A函数的线程，在此期间，map写入完成，返回数据正常。

### 解决方法

将B函数执行结束后wg.Done()改为从通道中读取结束后执行，即map写入完成后再停止对A函数的阻塞
