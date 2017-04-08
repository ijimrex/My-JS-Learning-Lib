/**
 * Created by leijin on 4/1/17.
 */
//只读属性
var dog= new Object()
Object.defineProperty(dog,"name",{
    writable:false,
    value:'dog'
})
console.log(dog.name)
dog.name="cat"
console.log(dog.name)

//限制修改
var dog=new Object()
Object.defineProperty(dog,"name",{
    configurable: false,
    value:"dog"
})
delete dog.name//无效
Object.defineProperty(dog,"name",{
    configurable: true,
    value:"dog"
})//报错
