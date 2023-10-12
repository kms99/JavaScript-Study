// 함수 = function(기능)
// input과 output을 가진 단위
// 기본 골격 - function () {}

// 두 개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수

// 1. 함수 선언문
function add (x, y) {
    return x + y;
}

// 2. 함수 표현식
let add2 = function (x, y) {
    return x + y;
}

// 3. 함수의 호출(사용)
console.log(add(2, 3)); // 5
console.log(add2(1, 2)); // 3

let functionResult1 = add(2, 3); // number type 5
let functionResult2 = add2(1, 2); // number type 3
console.log("add함수의 값은", functionResult1); //add함수의 값은 5
console.log("add2함수의 값은", functionResult2); //add2함수의 값은 3