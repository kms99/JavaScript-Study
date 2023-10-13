// user 객체를 생성
var user = {
    name : 'Kim',
    gender : 'male',
};;

var changeName = function(user, newName) {
    //newUser 변수데이터 생성, user의 참조값 복사
    var newUser = user;
    //user와 참조값을 공유하고 있어서 user와 newUser 모두 값 변경 name : 'Kim'=>'Lee'
    newUser.name = newName;
    return newUser;
};

var user2 = changeName(user,"Lee");

if (user !== user2) { // 같아서 출력 안됨
    console.log('유저정보가 변경되었습니다.');
}

console.log(user.name, user2.name); // Lee Lee
console.log(user === user2); // true