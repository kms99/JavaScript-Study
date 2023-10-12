// 형 변환
// 형태를 바꾼다
// 명시적 형 변환, 암시적 형 변환

//1. 암시적
//1-1. 문자열
let result1 = 1 + "2"; // 이때 + 는 문자열 연결 연산자로 작용, 1 > '1'로 형변환
console.log(result1); //'12'
console.log(typeof result1); //string

let result2 = "1" + true; // 이때 + 는 문자열 연결 연산자로 작용, true > 'true'로 형변환
console.log(result2); // '1true'
console.log(typeof result2); //string


//1-2. 숫자
let result3 = 1-"2"; // 이때 "2"는 숫자로 자동 형변환
console.log(result3); // -1
console.log(typeof result3); //number

let result4 = "2" * "3"; // 이때 "2", "3"은 각각 숫자형 2, 3으로 자동 형변환
console.log(result4); // 6
console.log(typeof result4); //number

//2. 명시적 형 변환
//2-1. Boolean
//falsy value
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log("---------------------------");
//truthy value
console.log(Boolean("false")); // true
console.log(Boolean({})); // true

//2-2. 문자열
let result5 = String(123);
console.log(result5); // '123'
console.log(typeof result5); // string

let result6 = String(true);
console.log(result6); // 'true'
console.log(typeof result6); // string

let result7 = String(false);
console.log(result7); // 'false'
console.log(typeof result7); // string

let result8 = String(null);
console.log(result8); // 'null'
console.log(typeof result8); // string

let result9 = String(undefined);
console.log(result9); // 'undefined'
console.log(typeof result9); // string

//2-3. Number
let result10 = Number('123');
console.log(result10); // 123
console.log(typeof result10); //number