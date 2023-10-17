const increase = (function(){
    let num = 0;
    
    return function (){
        return ++num;
    }
})();

console.log(increase());
num = 100;
console.log(increase());
console.log(increase());