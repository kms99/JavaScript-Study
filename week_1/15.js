// 1. 객체
// key-value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다. (모든 타입의 데이터)

// 1-1. 기본적인 객체 생성 방법
let person = {
    name: "홍길동",
    age: 30,
    gender: "남자",
};

// 1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name,age,gender) { // 생성자 함수는 함수 이름이 대문자로 시작
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person('김명섭',24,'남자'); // new 키워드로 객체 생성
console.log(person1);


// 2. 접근방법
console.log(person.name); // '김명섭'
console.log(person['name']); // '김명섭'

// 3. 객체 메소드 - 객체가 가진 여러가지 기능, 함수형태 : Object.~~)
// 3-1. Object.keys()
console.log(Object.keys(person)); //[ 'name', 'age', 'gender' ]

// 3-2. Object.values()
console.log(Object.values(person)); //[ '홍길동', 30, '남자' ]

// 3-3. Object.entries() // 모든 key와 value를 배열로 묶어서 배열에 저장
console.log(Object.entries(person)); //[ [ 'name', '홍길동' ], [ 'age', 30 ], [ 'gender', '남자' ] ]

// 3-4. Object.assign // 객체 복사
let newObj = {};
Object.assign(newObj,person);
console.log(newObj); // person 객체의 프로퍼티가 모두 복사됨

let newObj2 = {};
Object.assign(newObj2,person,{age : 31});
console.log(newObj2); // person 객체의 프로퍼티를 복사하되 age 프로퍼티의 값을 다른 값으로 재할당 하여 복사

// 3-5. 객체 비교
// 객체가 참조하는 것은 값 자체가 아닌 값의 참조 주소를 참조한다. 
let person2 = {
    name : '홍길동',
    age : 30,
    gender : '남자',
}
let person3 = {
    name : '홍길동',
    age : 30,
    gender : '남자',
}
console.log(person2===person3); // false
//JSON.stringify()는 문자열화 시키는 메서드
console.log(JSON.stringify(person2)===JSON.stringify(person3)); // true

// 3-6. 객체 병합
let person4 = {
    name:"홍길동",
    age:30,
};
let person5 = {
    gender:"남자",
};
// spread 문법 ... (배열이나 객체를 풀때 사용)
let person6 = {...person4, ...person5};
console.log(person6);