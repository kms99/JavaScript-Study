// 비동기적 코드의 이해

//setTimeout 코드의 실행이 완전히 끝나지 않아도
setTimeout(function(){console.log('1초를 기다리는 코드, aync')}, 1000);

//해당 콘솔이 출력된다.
console.log('이거는 sync');


