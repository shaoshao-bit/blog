# base64解码报错

使用base64解码获取token中用户信息时，出现解码失败的情况。

使用`base64.StdEncoding.DecodeString()` 函数进行解码，出现解码到字符串底部后报错的情况

解决方法：使用`base64.RawStdEncoding.DecodeString()` 替换
