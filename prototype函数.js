/**
 * Created by leijin on 4/1/17.
 */
function person(){}
person.prototype.name="Jack"
var p1=new person()
var p2=new person()
p2.name="tim"
console.log(p1.name)
//继承链，修改子类继承来的的引用类型，不会改动父类的实例，但会改变继承该父类的其他子类的该数据
function sup(){
    this.a=[1,2,3]

}

function sub() {

}
sub.prototype=new sup()

var a1=new sup()
var a2=new sub()
var a3=new sub()
a2.a.push(4)
