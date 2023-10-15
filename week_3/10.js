var obj = {
    0 : 'a',
    1 : 'b',
    2 : 'c',
    length : 3,
};


// ES6 신문법, 유사배열객체를 배열로 
var arr = Array.from(obj);
console.log(arr);