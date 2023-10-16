// 콜백함수

// 지금까지 사용 예시
//setTimeout(콜백함수, 시간);
setTimeout(function(){console.log('hi')},1000);

//array.forEach(콜백함수)
numbers=[1,2,3,4,5];
numbers.forEach(function(number){
    console.log(number);
});


// 콜백함수란?
// [의미] : 다른 코드의 인자로 넘겨주는 함수
// 인자로 넘겨준다는 말은 인자를 받는 주체가 있다는 말과 동일하다. ex) forEach, setTimeout

// 콜백함수를 넘겨받은 주체들(forEach, setTimeout등)은 이 콜백함수를 필요에 따라서 적절한 시점에 실행한다. (제어권은 주체들에 있다.)

// 결론! 제어권을 줄테니(setTimeout) 너가 알고있는 내부 로직(1초후 실행)으로 처리해