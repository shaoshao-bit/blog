受现代 JavaScript 的限制（以及废弃 Object.observe），Vue 不能检测到对象属性的添加或删除。由于 Vue  
会在初始化实例时对属性执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让 Vue 实时操纵

```
var vm = new Vue({
  data:{
      obj:{a:1}
  }
})
// `vm.a` 是响应的
vm.b = 2
// `vm.b` 是非响应的
```

第一种解决方案：使用 Vue.set(object, key, value) 方法将响应属性添加到嵌套的对象上：  
Vue.set(vm.someObject, 'b', 2)

第二种解决方案：您还可以使用 vm.$set 实例方法，这也是全局 Vue.set 方法的别名：  
this.$set(this.someObject,'b',2)

我认为最好的解决方案还是直接在定义对象时直接需要检测的属性，这种免去很多麻烦，毕竟你怎么都是要用这些属性的。

```
var vm = new Vue({
  data:{
      obj:{a:1}
  }
})
```