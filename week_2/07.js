// 콜백함수, 고차함수 연습
function multiplyBy(num){
    return function (x) {
        return x * num;
    }
}

function add(x,y) {
    return x+y;
}

const multiplyByTwo = multiplyBy(2);
// multiplyByTwo = function (x) {
//     return x * 2;
// }
console.log(multiplyByTwo(10)); //20

const multiplyByThree = multiplyBy(3);
// multiplyByThree = function (x) {
//     return x * 3;
// }
console.log(multiplyByThree(10)); //30

const result = add(multiplyByTwo(5), multiplyByThree(10));
console.log(`Final => ${result}`); //40