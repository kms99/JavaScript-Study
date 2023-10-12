// 화살표 함수
// ES6에서 등장한 신 문법

// 기존 함수 선언 방법 (함수 선언문)
function add (x, y) {
    return x + y;
}

// 화살표 함수
// 화살표 함수 (기본)
let add1 = (x, y) => {
    return x + y;
}

// 화살표 함수 (한줄) 
// 자동 return 처리, 한줄로 결과를 반환 할 때 사용, 2줄 이상 불가능
let add2 = (x, y) => x + y ;