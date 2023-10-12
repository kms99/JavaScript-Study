// 변수, 상수
// 변수 : 값을 메모리에 저장하고, 읽어서 재사용함

// [변수의 5가지 주요개념]
// 변수이름(식별자) : 저장된 값의 고유이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행우
// 변수 참조 : 변수에 할당된 값을 읽어오는 것

// 변수를 선언할 수 있는 3가지 방법 : var, let, const
// 1. var
var myVar = "Hello World"; // 선언과 할당을 한번에
var myVar = "Test1"; // 재선언 되고 문법오류 발생 x
myVar = "GoodBye"
console.log(myVar);

// 2. let
let mylet = "Hello World1";
// let mylet = "Test2"; // 재선언되어 문법오류 발생
mylet = "GoodBye 1";
console.log(mylet);

// 3. const
const myConst = "Hello World2";
// const myConst = "Test3"; // 재선언되어 문법오류 발생
myConst = "GoodBye 2"; // const는 상수이기 때문에 재할당 시 오류
console.log(myConst);