// 조건부 실행 - 논리연산의 결과를 도출할 수 있게해주는 항을 출력
let x = 10;

// && 연산자는 1항의 조건문이 true의 값을 가지면 2항으로 값을 결정한다. 따라서 2항 출력
(x > 0) && console.log("x는 양수입니다.");

// && 연산자는 1항의 조건문이 false의 값을 가지면 이미 false로 값이 결정 되었다. 따라서 2항 출력이 되지 않음
(x < 0) && console.log("x는 양수입니다.");


// 삼항 연산자와 단축평가
let y;
// y는 undefined의 값을 가지며, boolean 으로 false의 값을 가짐.
// 1항이 false라면 or(||) 연산에서는 2항의 true/false 유무로 값을 결정
// 따라서 20의 값을 가짐
// 예외처리할 때 default 값을 주기 위해 자주 사용
let z = y || 20; 
console.log(z);

