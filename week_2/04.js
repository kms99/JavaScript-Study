// 일급 객체로서의 함수

// 1. 변수에 함수를 할당할 수 있다.
// 함수가 마치 값으로 취급된다.
// 함수가 나중에 재사용이 가능하다.
const sayHello = function(){
    console.log('Hello!');
}

// 2. 함수를 인자로 다른 함수로 전달가능하다. (콜백함수)
// 콜백함수 : 매개변수로서 쓰이는 함수
function callFunction(func) {
    // 매개변수로 받은 변수가 함수다.
    func();
}

callFunction(sayHello);

// 3. 함수를 반환할 수 있다. (고차함수)
// 고차함수 : 함수를 인자로 받거나 return하는 함수
function createAdder (num) {
    return function(x) {
        return x+num;
    }
}

const addFive = createAdder(5);
// 다음과 같은 의미이다. 
// const addFive = function(x){
//     return x+5;
// };

console.log(addFive(10)); // 15