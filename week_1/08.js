// Scope, 전역변수, 지역변수

// x가 전역변수로 선언 될 경우 모든 영역에서 참조 가능 / 전역 스코프에서 생성
let x = 10; 

function printX(){
    console.log(x);
}

printX(); // 10
console.log(x); // 10