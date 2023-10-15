var obj = {
    0 : 'b',
    1 : 'a',
    2 : 'c',
    length : 3,
};

Array.prototype.push.call(obj,'d');

console.log(obj);

// ES6 신문법, 유사배열객체를 배열로 
var arr = Array.from(obj);
console.log(arr);
