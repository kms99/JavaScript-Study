// 1. 콜스택 누적 - 전역 컨텍스트
var a = 1; 

function outer() {
    function inner(){
        console.log(a);
        var a = 3;
    }
    // 3. 콜스택 누적 - inner 함수 컨텍스트, outer 함수 컨텍스트 , 전역 컨텍스트
    inner();
    // 4. 콜스택 누적 - outer 함수 컨텍스트 , 전역 컨텍스트
    console.log(a);
}
// 2. 콜스택 누적 - outer 함수 컨텍스트 , 전역 컨텍스트
outer();
// 5. 콜스택 누적 - 전역 컨텍스트 
console.log(a);
// 6. 콜스택 누적 - 