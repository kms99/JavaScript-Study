// Static Method (= 정적 메소드)
// Class => 객체를 만들기 위해 사용한다
// 다량으로, 안전하고, 정확하게 제작

class Calculator {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    // static을 사용하면 인스턴스 생성없이 Calculator.add(a,b) 형태로 사용가능
    static add (a,b){
        console.log("[계산기] 더하기를 진행합니다.");
        return a+b;
    }

    static substract(a,b){
        console.log("[계산기] 빼기를 진행합니다.");
        return a-b;
    }
}

console.log(Calculator.add(3,5));
console.log(Calculator.substract(3,5));