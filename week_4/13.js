// *가 붙은 함수 => 제너레이터 함수
// 이 함수를 실행하면 이터레이터 객체가 반환된다.

// (1) 제너레이터 함수 안에서 쓸 addCoffee 함수 선언
var addCoffee = function(prevName, name) {
    setTimeout(function (){
        //반환값
        coffeeMaker.next(prevName ? `${prevName}, ${name}` : name);
    },500);
};

// (2) 제너레이터 함수 선언!
// yield로 순서 제어
var coffeeGenerator = function* () {
    // yield 뒤에 나온 코드를 끝날 때 까지 기다린다.
    var espresso = yield addCoffee("", "에스프레소");
    console.log(espresso);
    var americano = yield addCoffee(espresso, "아메리카노");
    console.log(americano);
    var mocha = yield addCoffee(americano, "카페모카");
    console.log(mocha);
    var latte = yield addCoffee(mocha, "카페라떼");
    console.log(latte);
};

// 반복가능한 이터레이터 객체가 반환된다.
var coffeeMaker = coffeeGenerator();

// 이터레이터 객체를 next를 통해서 순차적 실행
coffeeMaker.next();