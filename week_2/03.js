// 5. 단축 속성명 : property shorthand
// key와 value를 담은 변수의 이름이 같을 때 key:value의 형태를 key(value)와 같이 한번만 써준다.
const name = 'kim';
const age = '24';

// 두개의 객체는 같은 값의 형태를 띈다.
const user = {
    name: name,
    age: age,
};

const user1 = {name,age,};
console.log (user); // { name: 'kim', age: '24' }
console.log (user1); // { name: 'kim', age: '24' }


// 6. 전개 구문 = spread operator

// 6-1. 배열에서의 전개구문
let arr = [1, 2, 3];
console.log(arr); // [ 1, 2, 3 ]
console.log(...arr); // 1 2 3, 요소를 풀어서 전개

let arr1 = [...arr, 4];
console.log(arr1); // [1, 2, 3, 4]

// 6-2. 객체에서의 전개구문
let member = {
    name : 'kim',
    age : 24.
};

let member2 = {...member};
console.log(member) //{ name: 'kim', age: 24 }
console.log(member2) //{ name: 'kim', age: 24 }


// 7. 나머지 매개변수 (rest parameter)
// 초과된 매개변수를 관리하는 변수 
function exampleFunc (a, b, c, ...args) {
    console.log(a, b, c);
    console.log(args);
}

exampleFunc(1, 2, 3, 4, 5);


// 8. 템플릿 리터럴
// 8-1. 문자열 값을 나타내는 기존 방법
console.log('Hello World'); // (' ') 작은따옴표
console.log("Hello World"); // (" ") 큰따옴표

// 8-2. 문자열 값을 나타내는 추가 방법
const caption ='!!';
console.log(`Hello World`); // (` `) 백틱
console.log(`Hello World${caption}`); // 자바스크립트와 연결가능
console.log(`
    Hello 
        World
            ${caption}
`); // 멀티라인 지원