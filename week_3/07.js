var obj1 = {
    outer: function(){
        console.log(this); // (1) { outer: [Function: outer] }
        var innerFunc = function(){
            console.log(this); // (2) Object [global], 전역객체
        };
        innerFunc();

        var obj2 ={
            innerMethod :  innerFunc, 
        };

        obj2.innerMethod(); // obj2
    },
};

obj1.outer();