// 3. 불리언 (Boolean)
// true(참)/false(거짓) 두가지 값
let bool1 = true;
let bool2 = false;

console.log(bool1); // true
console.log(typeof bool1); //boolean
console.log(bool2); // false
console.log(typeof bool2); //boolean


// 4. undefined
// 정의되지 않은 값, 값을 할당하지 않은 상태
let x;
console.log(x);


// 5. null
// 값이 존재하지 않음을 '명시적'으로 나타내는 방법
// null != undefined
let y=null;
console.log(y);

// 6. Object (객체)
// Key와 Value의 형태로 이루어진 해쉬의 형태
let person = {
    name:'Kim',
    age:24,
    isMarried:false,
}
console.log(person); // { name: 'Kim', age: 24, isMarried: false }
console.log(typeof person); // object

// 7. Array (배열)
// 여러 개의 데이터를 순서대로 저장하는 데이터 타입
// 인덱스를 가지며 순회가 가능하다. (0부터 시작)
let number =[1,2,3,4,5];
let fruits =['apple','banana','orange'];
console.log(number); // [ 1, 2, 3, 4, 5 ]
console.log(typeof person); // object
console.log(fruits); // [ 'apple', 'banana', 'orange' ]
console.log(typeof fruits); // object

