// 문 (if, else if, switch)

// 조건문 - if, else if, else, switch
let x = 10;

// 1. if
if (x > 0) { // true를 반환할 때 코드블럭 실행
    console.log("x는 양수입니다.");
}

let y = "hello world";
if (y.length>=5) {
    console.log("y는 길이가 5 이상입니다.");
}


// 2. if, else
// let a = 10;
let a = -3;
if (a > 0) { // true를 반환할 때 코드블럭 실행
    console.log("a는 양수입니다.");

} else { // false를 반환할 때 코드블럭 실행
    console.log("a는 0이거나 음수입니다.");
}

// 3. if, else if, else
// let b = 10;
let b = 0;
// let b = -10;
if (b > 0) { // 해당 조건에 true를 반환할 때 코드블럭 실행
    console.log("b는 양수입니다.");

} else if( b < 0 ){ // 해당 조건에 true를 반환할 때 코드블럭 실행
    console.log("b는 음수입니다.");
} else { // 모든 조건에 false를 반환할 때 코드블럭 실행
    console.log("b는 0입니다.");
}

// 4. switch
// 변수의 값에 따라, 여러개의 경우 (case) 중 하나를 선택
let fruit = "사과";

switch (fruit) {
    case "사과" :
        console.log('사과입니다.');
        break; // break를 사용하지 않는다면 참이되는 case 아래의 모든 케이스들이 실행된다.
    case "바나나" :
        console.log('바나나 입니다.');
        break;
    case "키위" :
        console.log('키위 입니다.');
        break;
    default :
        console.log('아무것도 아닙니다.');
}