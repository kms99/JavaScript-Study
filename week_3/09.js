var obj={
    a:1,
    method:function(x,y){
        console.log(this.a, x, y);
    },
};

obj.method(2, 3); // 1, 2, 3

obj.method.call({a: 4}, 2, 3); // 4, 2, 3
obj.method.apply({a: 4}, [2, 3]); // 4, 2, 3