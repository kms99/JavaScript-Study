// this 우회방법

// 1. 객체 내부의 메서드 내부에서 지정된 함수가 this를 사용하기 위해서 this를 식별자에 할당한다.
var obj = {
	outer : function() {
        //AS-IS (변경 전)
		var innerFunc1 = function() {
			console.log(`AS-IS this => ${this}`);
		}
        innerFunc1();

        //TO-BE (변경 후)
        var innerFunc1
        var thisVal = this;
		var innerFunc2 = function() {
			console.log(`TO-BE this => ${thisVal}`);
		}
        innerFunc2();
	}
}

obj.outer();

// 2. 화살표함수 (=this를 바인딩하지 않는 함수)
var obj1 = {
    outer :function () {
        console.log('in outer =>', this); // outer
        var innerFunc = () => {
            console.log('in outer>innerFunc => ', this); // outer 
        };
        innerFunc();
    }
}

obj1.outer();