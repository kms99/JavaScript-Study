// 배열
// 인덱스가 중요 (순서)

// 1. 생성
// 1-1. 기본 생성
let fruits = ["사과", "바나나", "오렌지"];
console.log(fruits); // [ '사과', '바나나', '오렌지' ]
console.log(fruits.length); // 3

// 1-2. 크기 지정 생성
let number = new Array(5);
console.log(number); // [ <5 empty items> ]
console.log(number.length); // 5

// 2. 요소 접근
console.log(fruits[0]); // "사과"
console.log(fruits[1]); // "바나나"
console.log(fruits[2]); // "오렌지"

// 3. 배열 메소드
// 3-1. 배열.push(item), 마지막 인덱스로 item 추가
console.log(fruits); // [ '사과', '바나나', '오렌지' ]
fruits.push('키위');
console.log(fruits); // [ '사과', '바나나', '오렌지', '키위']

// 3-2. 배열.pop(), 마지막 인덱스 item 제거
console.log(fruits); // [ '사과', '바나나', '오렌지', '키위']
fruits.pop();
console.log(fruits); // [ '사과', '바나나', '오렌지']

// 3-3. 배열.shift(), 첫번째 인덱스 item 제거
console.log(fruits); // [ '사과', '바나나', '오렌지']
fruits.shift();
console.log(fruits); // [ '바나나', '오렌지']

// 3-4. 배열.unshift(item), 첫번째 인덱스 item 추가
console.log(fruits); // [ '바나나', '오렌지']
fruits.unshift('사과');
console.log(fruits); // [ '사과', '바나나', '오렌지']

// 3-5. 배열.splice(변경할 인덱스의 시작, 개수, 변경할 값들)
// 1번째 인수를 통해 지정한 인덱스부터 2번째 인수의 개수만큼 삭제하고 해당부분에 3번째부터 지정한 인수 값으로 변경
console.log(fruits); // [ '사과', '바나나', '오렌지']
fruits.splice(1, 1, "포도", "키위");
console.log(fruits); // [ '사과',  '포도', '키위', '오렌지']

// 3-6. 배열.slice(추출할 인덱스의 시작, 추출할 인덱스의 마지막+1)
console.log(fruits); // [ '사과',  '포도', '키위', '오렌지']
let slicedArray = fruits.slice(1, 2);
console.log(slicedArray); // ['포도']



let numbers = [4, 1, 5, 4, 5];

// 3-7. 배열.forEach(콜백함수)
// 기본 함수 활용
numbers.forEach(function(number){
    console.log(number);
});
// 화살표 함수 활용
numbers.forEach(number => {
    console.log(number);
});

// 3-8. 배열.map(콜백함수), 기존 item을 새로운 형태의 배열로 변경
// 리턴을 하지 않는다면 기존 함수의 개수만큼 undefined로 채워진 배열 생성
// 기본 함수 활용
let newNumbers = numbers.map(function(number){
    return number *2
});
console.log(newNumbers); //[ 8, 2, 10, 8, 10 ]
// 화살표 함수 활용
let newNumbers2 = numbers.map(number=>number*2);
console.log(newNumbers); //[ 8, 2, 10, 8, 10 ]

// 3-9. 배열.filter(콜백함수), 콜백함수 내 리턴문에 해당하는 조건을 충족하는 item들을 배열로 리턴
let filterNumbers = numbers.filter(function(number){
    return number === 5;
})
console.log(filterNumbers);//[ 5, 5 ]
// 화살표 함수 활용
let filterNumbers2 = numbers.filter(number=>number === 5);
console.log(filterNumbers2);//[ 5, 5 ]


// 3-10. 배열.filter(콜백함수), 콜백함수 내 리턴문에 해당하는 조건을 충족하는 최초 item 1개를 리턴
let findNumber = numbers.find(function(number){
    return number > 4;
})
console.log(findNumber);//5
// 화살표 함수 활용
let findNumber2 = numbers.find(number=>number > 4);
console.log(findNumber2);//5