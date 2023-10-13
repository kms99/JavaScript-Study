// 5. 배열의 요소로 함수를 할당할 수 있다.
const myArr = [
    function (a,b) {
        return a+b;
    },
    function (a,b) {
        return a-b;
    },
];

// 더하기
console.log(myArr[0](1,3)); // 4
// 빼기
console.log(myArr[1](3,1)); // 2