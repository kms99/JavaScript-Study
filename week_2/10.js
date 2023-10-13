// 2. Set
// 고유한 값을 저장하는 자료구조
// 값만 저장, 키 저장 x
// 값이 중복되지 않는 유일한 값으로 구성
// 기능 : 값 추가, 검색, 값 삭제, 모든 값 제거, 존재 여부 확인

// 생성자 함수를 통한 생성
const mySet = new Set();

// 등록
mySet.add('value1');
mySet.add('value2');
mySet.add('value2'); // 중복값 발생시 무시
mySet.add('value5');
mySet.add('value7');
mySet.add('value9');

// 크기 확인
console.log(mySet.size); // 5

// 요소 확인
console.log(mySet.has('value1')); //true
console.log(mySet.has('value2')); //true
console.log(mySet.has('value3')); //false

// 반복 for ~ of ~
for (const value of mySet.values()){
    console.log(value);
}