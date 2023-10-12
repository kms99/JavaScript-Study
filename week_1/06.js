// 연산자 (+,-,*,/,%)

// 1. 더하기 연산자
console.log(1 + 1); // 2
console.log(1 +'1'); // '11', 문자열 연결 연산자

// 2. 뺴기 연산자
console.log(1 -"2"); // -1
console.log(1 - 2); // -1

// 3. 곱하기 연산자
console.log(2 * 3); // 6
console.log("2" * 3); // 6

// 4. 나누기 연산자(/)
console.log(4 / 2); // 2
console.log("4" / 2); // 2

// 5. 나누기 연산자(/) vs 나머지 연산자(%)
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1


// 6. 할당 연산자 (assignment)
// 6-1. 등호 연산자 (=)
let x = 10; // x 에 10을 할당하였다 
console.log(x); // 10

// 6-2. 더하기 등호 연산자 (+=)
x += 5; // x = x + 5와 같으며 기존 x 변수에 누적하여 덧셈한다.
console.log(x); // 15

// 6-3. 더하기 등호 연산자 (-=)
x -= 5; // x = x - 5와 같으며 기존 x 변수에 누적하여 뺼셈한다.
console.log(x); // 10

// 6-3. 곱하기 등호 연산자 (*=)
x *= 2; // x = x * 5와 같으며 기존 x 변수에 누적하여 곱셈한다.
console.log(x); // 20


// 7. 비교 연산자 (true/false)
// 7-1. 일치 연산자 (===)
// 타입과 값이 모두 일치해야 true를 반환하는 연산자
console.log(2 === 2); // true
console.log(2 === '2'); // false

// 7-2. 불일치 연산자 (!==)
// 타입과 값이 모두 일치해야 false를 반환하는 연산자
console.log(2 !== 2); // false
console.log(2 !== '2'); // true

// 7-3. 작다 연산자 (<)
console.log(2 < 3); // true

// 7-4. 작거나 같다 연산자 (<=)
console.log(2 <= 3); // true
console.log(3 <= 3); // true

// 7-5. 크다 연산자 (>)
console.log(2 > 3); // false

// 7-6. 크거나 같다 연산자 (>=)
console.log(2 > 3); // false
console.log(3 >= 3); // true


// 8. 논리 연산자
// 8-1 논리 곱 연산자 (&&) / 둘다 true일 경우 > true
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// 8-2 논리 합 연산자 (||) / 둘 중 하나라도 true일 경우  > true
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 8-3 논리 부정 연산자 (!)
console.log(true); //true
console.log(!true); //false

let a = true;
console.log(a); //true
console.log(!a); //false


// 9. 삼항 연산자 (? :)
// 조건에 따라서 값을 선택한다.
let num = 10;
let result = num > 5 ? "크다" : "작다"; //1항 true/false로 판단되는 표현식, 2항 true 시 반환할 값, 3항 false 시 반환할 값
console.log(result); // "크다"

let num1 = 20;
let result1 = num1 < 10 ? "작다" : "크다"; //1항 true/false로 판단되는 표현식, 2항 true 시 반환할 값, 3항 false 시 반환할 값
console.log(result); // "크다"

// 10. type 연산자 (typeof)
// 변수에 할당된 값의 타입을 알아보는 연산자.
console.log(typeof "5"); // string