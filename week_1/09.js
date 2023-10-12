// x가 지역변수로 선언될 경우 (함수 내부 스코프), 함수 내부 외에서는 참조 불가능 / 함수 내부 스코프에서 생성
function printX(){
    let x = 10; 
    console.log(x);
}

printX(); // 10
console.log(x); // ReferenceError, 참조에러 발생