// 명시적 this binding
// call, apply, bind
// call 
var func = function (a,b,c) {
    console.log(this, a, b, c);
};

// no binding
func(1,2,3); // global, 1, 2, 3

// 명시적 binding (call)
func.call({x:1}, 4,5,6); // {x:1}, 4, 5, 6

// 명시적 binding (apply)
func.apply({x:1}, [4, 5, 6]); // {x:1}, 4, 5, 6