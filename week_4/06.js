var obj = {
    vals:[1,2,3],
    logValues: function(v, i ) {

        console.log('>>>>>>test starts');
        if (this===global) {
            console.log(`this가 ${this}입니다. arg1:${v}, arg2:${i}`);

        }else{
            console.log(`this가 ${this}입니다. arg1:${v}, arg2:${i}`);
        }
        
        console.log('>>>>>>test ends');
    }
}

obj.logValues(1,2);

// 매서드를 콜백함수로 활용을 했을경우
// 매서드로서 동작하지 않고 함수로 동작한다. (this 바인딩->전역객체)
[4, 5, 6].forEach(obj.logValues); 