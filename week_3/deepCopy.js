// 깊은 복사는 기본적으로 프로퍼티를 모두 체크하되, 프로퍼티의 값이 Object 타입일경우 안쪽으로 파고들어 먼저 복사를 실시한다.

var copyObjectDeep = function(target) {
    var result = {}
    if (typeof target === 'object' && target !== null){
        // 프로퍼티를 다 훓어보겠다. 끝까지
        for (var prop in target) {
            result[prop] = copyObjectDeep(target[prop]);
        }
    }else {
        result = target;
    }
    return result;
}

var obj = {
    a : 1,
    b : {
        c : null,
        d : [1, 2],
    },
};

var obj2 = copyObjectDeep(obj);
obj2.a = 3;
obj2.b.c = 4;
obj2.b.d[1] = 3;

console.log(obj);
console.log(obj2);
