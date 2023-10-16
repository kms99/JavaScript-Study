setTimeout(
    function (name) {
      var coffeeList = name;
      console.log(coffeeList);
  
      setTimeout(
        function (name) {
          coffeeList += ", " + name;
          console.log(coffeeList);
  
          setTimeout(
            function (name) {
              coffeeList += ", " + name;
              console.log(coffeeList);
  
              setTimeout(
                function (name) {
                  coffeeList += ", " + name;
                  console.log(coffeeList);
                },
                500,
                "카페라떼"
              );
            },
            500,
            "카페모카"
          );
        },
        500,
        "아메리카노"
      );
    },
    500,
    "에스프레소"
  );

//------------------------------------------------------------

var coffeeList = '';

let consoleEspresso = function(name){
    coffeeList += name;
    console.log(coffeeList);   
    setTimeout(consoleAmericano,500,'아메리카노');
}
let consoleAmericano = function(name){
    coffeeList += ", " + name;
    console.log(coffeeList);   
    setTimeout(consoleMocha,500,'모카');
}
let consoleMocha = function(name){
    coffeeList += ", " + name;
    console.log(coffeeList);   
    setTimeout(consoleLatte,500,'라떼');
}
let consoleLatte = function(name){
    coffeeList += ", " + name;
    console.log(coffeeList);   
}

setTimeout(consoleEspresso,500,'에스프레소');