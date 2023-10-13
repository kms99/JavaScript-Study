// user 객체를 생성
var user = {
    name : 'Kim',
    gender : 'male',
};;

var copyObject = function (target) {
    var result={};
    // 객체를 property 하나하나를 추가하겠다. 단, 반복문을 통해서
    for (var prop in target) {
        result[prop] = target[prop];
    }

    return result;
}

var user2 = copyObject(user);
user2.name = "Lee";

if (user !== user2) { // 출력
    console.log('유저정보가 변경되었습니다.');
}

console.log(user.name, user2.name); // Kim Lee
console.log(user === user2); // false