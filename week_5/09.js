// 클로저

// (1) 콜스텍 누적 현황 : 전역컨텍스트
const x = 1;

function outerFunc(){
    const x = 10;
    function innerFunc(){
        console.log(x); // 10
    } // (4) 콜스텍 누적 현황 : 전역컨텍스트 - outerFunc 함수 컨텍스트 
    // (3) 콜스텍 누적 현황 : 전역컨텍스트 - outerFunc 함수 컨텍스트 - innerFunc 함수 컨텍스트 
    innerFunc();
} // (5) 콜스텍 누적 현황 : 전역컨텍스트

// (2) 콜스텍 누적 현황 : 전역컨텍스트 - outerFunc 함수 컨텍스트 
outerFunc();
// (6) 콜스텍 누적 현황 : ..