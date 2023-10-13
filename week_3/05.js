var n = null;
console.log( typeof n ); // object > JavaScript버그

//동등연산자 (equality operator)
console.log(n == undefined); // true
console.log(n == null); //true

//일치연산자 (identify operator)
console.log(n === undefined); //false
console.log(n === null) //true