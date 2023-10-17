const x = 1;

function outer(){
    const x = 10;
    // inner함수의 outer는 outer 함수
    const inner = function(){
        // 스코프 체인으로 연결되어 outer의 x를 참조
        console.log(x); //10
    };
    return inner; // outer가 outer함수인 상태로 return
}


const innerFunc = outer(); // outer가 outer함수인 inner 함수 반환
innerFunc(); 