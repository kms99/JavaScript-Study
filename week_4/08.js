// 콜백함수의 this를 바인딩하는 방법중 최고는 bind방법이다.

var obj1 = {
    name : 'obj1',
    func : function(){
        console.log(this.name);
    }
}
var obj2 = obj1.func.bind({name:'kim'});
var obj3 = obj1.func.bind(obj1);
setTimeout(obj2,1000);
setTimeout(obj3,1200);
//-----------------------------------------------------------
var obj4 = { name : 'obj4' };
setTimeout(obj1.func.bind(obj4), 1500);