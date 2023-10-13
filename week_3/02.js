// user 객체를 생성
var user = {
    name : 'Kim',
    gender : 'male',
};;

var changeName = function(user, newName) {
    // 새로운 객체리턴, 새로운 참조주소 생성
    return {
        name: newName,
        gender: user.gender,
    };
};

var user2 = changeName(user,"Lee");

if (user !== user2) { // 출력
    console.log('유저정보가 변경되었습니다.');
}

console.log(user.name, user2.name); // Kim Lee
console.log(user === user2); // false