// AS-IS

// var numbers = [10,20,3,16,45];

// var max = min = numbers[0]; //10

// numbers.forEach(function(number) {
//     if (number>max) {
//         max = number;
//     } else if (number<min) {
//         min = number;
//     }
// });

// console.log(`max => ${max}`);
// console.log(`min => ${min}`);

// TO-BE

var numbers = [10, 20, 3, 16, 45];

// apply 활용
var max1 = Math.max.apply(null, numbers);
var min1 = Math.min.apply(null, numbers);

// spread operator
var max2 = Math.max(...numbers);
var min2 = Math.min(...numbers);

console.log(`max1 => ${max1}`);
console.log(`min1 => ${min1}`);
console.log(`max2 => ${max2}`);
console.log(`min2 => ${min2}`);