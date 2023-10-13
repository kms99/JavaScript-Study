// 얕은 복사
var copyObject = function (target) {
    var result={};

    // 객체를 property 하나하나를 추가하겠다. 단, 반복문을 통해서
    for (var prop in target) {
        result[prop] = target[prop];
    }

    return result;
}