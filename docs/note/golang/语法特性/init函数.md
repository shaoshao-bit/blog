# init函数

> go语言的init函数用于package包的初始化，是go语言的重要特性

1.  init函数是用于程序执行前做包的初始化函数，比如初始化包里的变量等

2.  每个包可拥有多个init函数

3.  包的每个源文件也可以拥有多个init函数

4.  同一个包里多个init函数的执行顺序没有明确定义，一般为顺序执行

5.  不同包的init函数按照包导入的依赖关系决定初始化函数的执行顺序

6.  init函数不能被其他函数调用，而是在main函数执行之前自动被调用

7.  init函数与main函数一样，不能有任何参数，也没有返回值

***

程序的初始化和执行都起始于main包。如果main包还导入了其他的包，那么就会在编译时将他们依次导入，有一个包被多个包同时导入，那么它只会被导入一次（例如很多包可能用到了fmt包，但只会被导入一次）。如果导入的包导入了其他包，那么会先将其他的包导入进来，然后再对这些包中的包级变量和变量进行初始化，接着执行init函数，以此类推。等所有的包都加载完毕了，就会开始对main包中的包级常量和变量进行初始化，然后执行main包中的init函数，最后执行main函数。

![](https://image-1258252302.cos.ap-beijing.myqcloud.com/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0NoYXJsaWV3b2xm,size_16,color_FFFFFF,t_70.png)

***

如果只需要一个包的init函数，不需要包的其他方法，可以只执行这个包的init函数

```go
import _ "github.com/go-sql-driver/mysql"
```
