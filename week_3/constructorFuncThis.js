// 생성자 함수
var Cat = function(name, age){
    this.name = name;
    this.age = age;
    this.bark = '야옹';

    console.log(name, '의 this => ', this);
}

var choco = new Cat('초코',7) // this : choco
var nabi = new Cat('나비',5) // this : nabi 