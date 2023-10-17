// [렉시컬 스코프]
// JS 엔진은 함수를 어디서 호출했는지가 아니라 
// 어디서 정의되었는지에 따라서 스코프를 결정

// 외부 렉시컬 환경에 대한 참조값 즉, outer는 함수 정의가 평가되는 시점 (실행x)에서 스코프를 결정한다.

// (1) 콜스택 - 전역컨텍스트
const x = 1;

// outerFunc의 함수가 선언될 당시 컨텍스트 => 전역
function outerFunc(){
    const x = 10;
    // outer와 innerFunc는 서로 스코프를 공유하지 않는다.
    innerFunc();
}

// innerFunc의 함수가 선언될 당시 컨텍스트 => 전역
function innerFunc(){
    console.log(x);
}
// (1) 콜스택 - 전역컨텍스트 - outerFunc함수 컨텍스트
outerFunc();