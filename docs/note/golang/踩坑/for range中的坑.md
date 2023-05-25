# for range中的坑

```go
func main() {
  arr1 := []int{1, 2, 3}
  arr2 := make([]*int, len(arr1))
 
  for i, v := range arr1 {
    arr2[i] = &v
  }
 
  for _, v := range arr2 {
    fmt.Println(*v)
  }
}
```

如上代码，输出为：

```go
3
3
3
```

#### 原因

因为for range在遍历值类型时，其中的v变量是一个值的拷贝，当使用&获取指针时，实际上是获取到v这个临时变量的指针，而v变量在for range中只会创建一次，之后循环中会被一直重复使用，所以在arr2赋值的时候其实都是v变量的指针，而\&v最终会指向arr1最后一个元素的值拷贝。

可理解为：

```go
func main() {
  arr1 := []int{1, 2, 3}
  arr2 := make([]*int, len(arr1))
 
  var v int
  for i:=0;i<len(arr1);i++ {
    v = arr1[i]
    arr2[i] = &v
  }
 
  for _, v := range arr2 {
    fmt.Println(*v)
  }
}
```

#### 解决方法

传递原始指针

```go
func main() {
  arr1 := []int{1, 2, 3}
  arr2 := make([]*int, len(arr1))
 
  for i := range arr1 {
    arr2[i] = &arr1[i]
  }
 
  for _, v := range arr2 {
    fmt.Println(*v)
  }
}
```

使用临时变量

```go
func main() {
  arr1 := []int{1, 2, 3}
  arr2 := make([]*int, len(arr1))
 
  for i, v := range arr1 {
    t := v
    arr2[i] = &t
  }
 
  for _, v := range arr2 {
    fmt.Println(*v)
  }
}
```

使用闭包

```go
func main() {
  arr1 := []int{1, 2, 3}
  arr2 := make([]*int, len(arr1))
 
  for i, v := range arr1 {
    func(v int){
       arr2[i] = &v
    }(v)
  }
 
  for _, v := range arr2 {
    fmt.Println(*v)
  }
}
```

由于这一问题过于普遍，Golang甚至将其写入了文档的『常见错误』部分：[文档](https://github.com/golang/go/wiki/CommonMistakes#using-reference-to-loop-iterator-variable "文档")
