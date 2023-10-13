// ES6

// 1. let(변수), const(상수)
// 이전에는 var라는 키워드로 변수 생성, 재할당과 재선언이 가능함 
var varValue = 1; 
varValue = 2;
var varValue = 3; 

let letValue = 1;
letValue = 2; // 재할당 가능
// let letValue = 3; // SyntaxError (재선언 불가능)

const constValue = 1;
// constValue = 2; // SyntaxError (재할당 불가능)
// const constValue = 3; // SyntaxError (재선언 불가능) 


// 2. 화살표 함수 (Arrow Function)
// 기존에는 함수 선언문, 함수 표현식로 함수를 정의
// 2-1. 기존 방식
// 함수 선언문
function add(a, b) {
    return a + b;
}
// 함수 표현식
let add2 = function(a, b){
    return a + b;
}
// 2-2. ES6 신 문법 화살표함수, 간단할 경우 한줄로 표현도 가능
let add3 = (a, b) => {
    return a + b
}


// 3. 삼항 연산자
console.log(true ? '참' : '거짓'); // 참
console.log(false ? '참' : '거짓'); // 거짓