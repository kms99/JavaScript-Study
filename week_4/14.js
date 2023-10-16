// Promise
// then
// 이번에 사용하는 방법 async/await


var addCoffee = function(name) {
    return new Promise(function (resolve) {
        setTimeout(function(){
            resolve(name);
        },500);
    });
};

// async가 선언된 스코프 내에서 await를 만나면 끝날때 까지 기다린다.
var coffeeMaker = async function () {
    var coffeeList="";
    var _addCoffee = async function (name) {
        coffeeList += (coffeeList ? ", ": "") + (await addCoffee(name));
    };

    // promise를 반환하는 함수일 경우, await를 만나면 무조건 끝날 때 까지 기다린다.
    await _addCoffee("에스프레소");
    console.log(coffeeList);
    await _addCoffee("아메리카노");
    console.log(coffeeList);
    await _addCoffee("카페모카");
    console.log(coffeeList);
    await _addCoffee("카페라떼");
    console.log(coffeeList);
};

coffeeMaker();