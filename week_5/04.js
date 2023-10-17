// Getters와 Setters
// 객체지향 프로그래밍 언어 -> G,S
// 클래스 -> 객체 (인스턴스)
// new Class (a,b,c)

class Rectangle {
    constructor(height, width){
        // underscore : private의 의미
        // 정보 은닉과 캡슐화를 위한 관례로, 외부에서 직접 접근할 수 없도록 제한하는 역할
        this._height = height;
        this._width = width;
    }

    // width를 위한 getter
    get width(){
        return this.width;
    }

    // width를 위한 setter
    set width(value){
        if (value <=0 ){
            console.log('가로길이는 0보다 커야합니다.');
            return;
        }else if (typeof value !== 'number'){
            console.log('[오류] 가로길이로 입력된 값이 숫자타입이 아닙니다.');
            return;
        }
        this._width =value;
    }
    
    // height를 위한 getter
    get height(){
        return this.height;

    }

    // height를 위한 setter
    set height(value){
        if (value <=0 ){
            console.log('세로길이는 0보다 커야합니다.');
            return;
        }else if (typeof value !== 'number'){
            console.log('[오류] 세로길이로 입력된 값이 숫자타입이 아닙니다.');
            return;
        }
        this._width =value;
    }

    getArea () {
        const a = this._width*this._height;
        console.log(`넓이는 ${a} 입니다.`);
    }
}

const rectangle1 = new Rectangle(10,20);
const rectangle2 = new Rectangle(10,30);
const rectangle3 = new Rectangle(15,20);

rectangle1.getArea();