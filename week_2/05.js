// 4. 프로퍼티로 함수를 사용할 수 있다.
// 메서드 : 객체의 프로퍼티로 함수가 오는 경우
const person = {
    name : 'John',
    age : 31,
    isMarried: true,
    // 일반적인 메서드의 형태
    sayHello : function(){
        console.log(`${this.name}님이 인사하셨습니다.`);
    },
    // 화살표 함수에서는 this 키워드가 항상 전역객체를 가리킨다.
    // 따라서 메서드로서 객체 내부의 값에 접근할 수 없다.
    sayBye : ()=>{
        console.log(`${this.name}님이 나가셨습니다.`);
    }
}

person.sayHello(); //John님이 인사하셨습니다.
person.sayBye(); //undefined님이 나가셨습니다.
