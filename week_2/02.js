// 4. 구조 분해 할당 : destructuring

// 4-1. 배열
let [value1, value2] = [1, 'new'];
console.log("value1 : ", value1); // value1 :  1
console.log("value2 : ", value2); // value2 :  new

let arr = ['value1', 'value2', 'value3'];

// 인덱스 순서대로 할당
let [a, b] = arr; 
console.log("a : ", a); // a :  value1
console.log("b : ", b); // b :  value2

// 초과된 변수에는 undefined 할당
let [a1, b1, c1, d1] = arr;
console.log("a1 : ", a1); // a :  value1
console.log("b1 : ", b1); // b :  value2
console.log("c1 : ", c1); // c :  value3
console.log("d1 : ", d1); // c :  undefined

// 값이 들어오지 않을 경우를 대비하여, 초기값 세팅가능
let [a2, b2, c2, d2='initValue'] = arr;
console.log("a2 : ", a2); // a :  value1
console.log("b2 : ", b2); // b :  value2
console.log("c2 : ", c2); // c :  value3
console.log("d2 : ", d2); // c :  defaultValue


// 4-2. 객체
// 배열의 구조분해할당과는 다르게 키값으로 값을 매칭하여 가져온다.
let user = {
    name : 'kim',
    age : 30,
};

// 키와 저장할 변수의 이름을 같게 설정
let {name, age} = user;
console.log('name => ', name); // name =>  kim
console.log('age => ', age); // age =>  30

// 키와 저장할 변수의 이름을 다르게 설정
let {name: newName, age: newAge} = user; 
console.log('newName => ', newName); // newName =>  kim
console.log('newAge => ', newAge); // newAge =>  30

// 없는 키를 저장하려고 할 때
let {name: name1, age: age1, birthday1} = user;
console.log('name1 => ', name1); // name1 =>  kim
console.log('age1 => ', age1); // age1 =>  30
console.log('birthday1 => ', birthday1); // birthday1 => undefined

// 없는 키를 저장할 때를 대비한 초기값 설정
let {name: name2, age: age2, birthday2='today'} = user;
console.log('name2 => ', name2); // name2 =>  kim
console.log('age2 => ', age2); // age2 =>  30
console.log('birthday2 => ', birthday2); // birthday2 => undefined