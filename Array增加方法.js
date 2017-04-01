/**
 * Created by leijin on 3/31/17.
 */
/*给Array 增加 set 方法*/

Array.prototype.unique=function(){
    var len=this.length;
    var s= new Set()
    for (var i=0;i<len;i++){
        s.add(this[i])
    }
    return s
}
var test=new Array(1,2,2,4,5,1,4)
console.log(test.unique())