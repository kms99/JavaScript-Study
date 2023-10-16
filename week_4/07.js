// [콜백 함수 내부의 this에 다른 값 바인딩하기]
// 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할수는 없을까요?
// 콜백 함수 내부의 THIS에 다른 값 바인딩하는 방법
// 고차함수 개념을 이용

var obj1 = {
    name:'obj1',
    func:function(){
        var self = this; // obj

        //클로저의 개념 : 참조하는 함수가 끝나도 해당 함수와 관련된 값을 이용할 수 있는것
        return function(){
            console.log(self.name); // 'obj1'
        };
    },
};

var callback = obj1.func(); // function(){console.log('obj1')};
setTimeout(callback,1000); 

// -------------------------------------------------------------------------
// 완전 하드코딩 방식
// 이런코딩은 하지 맙시다.

var obj2={
    name:'obj2',
    func: function(){
        console.log(obj2.name);
    },
};

setTimeout(obj2.func,1000); 

// -------------------------------------------------------------------------
var obj3 = {
    name:'obj3',
    func:function(){
        var self = this; // obj

        return function(){
            console.log(self.name); // 'obj1'
        };
    },
};

var obj4 = {
    name:'obj4',
    func:obj3.func,
};

var callback2 = obj4.func();
setTimeout(callback2, 1500);

//------------------------------------------------------------------------------
// 명시적 this binding 이용
var obj4 = {
    name:'obj4',
    func:function(){
        var self = this; // obj

        return function(){
            console.log(self.name); // 'obj1'
        };
    },
};

var obj5 = {name:'obj5'};
// 명시적 thisbinding 실시
var callback3 = obj4.func.call(obj5);
setTimeout(callback3,2000);

//-----------------------------------------------------------------------------
