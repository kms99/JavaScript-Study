// 상속 (Inheritance)
// Class -> 유산으로 내려주는 주요 기능!
// 부모 <-> 자식

// 동물 전체에 대한 클래스
class Animal {
    constructor (name) {
        this._name = name;
    }

    // 메서드 짖다.
    speak () {
        console.log(`${this._name} says!`)
    }
}

// extends > 상속
class Dog extends Animal {
    // 상속받은 메서드를 재정의 할 수 있음
    // overriding 개념
    speak () {
        console.log(`${this._name} barks!!`);
    }
}

const cuttyPuppy01= new Dog('choco');
cuttyPuppy01.speak();