// 클래스라는 설계도 제작
class Person {
    // 사람을 구성하는 필수요소
    // name, age
    constructor(name, age){
        //this는 인스턴스를 뜻함
        this.name = name;
        this.age = age;
    }

    // 메서드의 형태 동사 표현
    sayHello () {
        console.log(`${this.name}님 안녕하세요.`);
    }
    sayAge () {
        console.log(`${this.name}님의 나이는 ${this.age}입니다.`);
    }
}

// const 키워드를 이용하여 식별자를 설정하고 new 키워드를 이용하여 인스턴스 생성
// 이름은 'Kim', 나이는 24인 사람
const person1 = new Person('Kim', 24);
const person2 = new Person('Lee', 30);
person1.sayHello();
person1.sayAge();

person2.sayHello();
person2.sayAge();
