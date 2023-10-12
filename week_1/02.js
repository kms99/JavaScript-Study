// 데이터 타입
// run time : run 하는 time
// 코드 작성할 때가 아닌 코드가 실행되는 시점(터미널에 코드가 실행될 때)

// 1. 숫자
// 1-1. 정수형
let num1 = 10;
console.log(num1);
console.log(typeof num1); //number

// 1-2. 실수형
let num2 = 3.14;
console.log(num2);
console.log(typeof num2); //number

// 1-3. 지수형
let num3 = 2.5e5; // * 10의 5승 
console.log(num3);
console.log(typeof num3); //number

// 1-4. Nan
let num4 = "Hello" / 2;
console.log(num4); // Nan : Not a number (숫자가 아닐때)
console.log(typeof num4); //number (Nan도 숫자형으로 취급)

// 1-5. Infinity
let num5 = 1 / 0;
console.log(num5); 
console.log(typeof num5); //number (Infinity도 숫자형으로 취급)

// 1-6. -Infinity
let num6 = -1 / 0;
console.log(num6); 
console.log(typeof num6); //number (-Infinity도 숫자형으로 취급)