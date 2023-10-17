class Car{
    constructor (modelName, modelYear, type, price) {
        this._modelName = modelName;
        this._modelYear = modelYear;
        this._type = type;
        this._price = price;
    }

    set modelName(value) {
        if (value.length<=0) {
            console.log('[오류] 모델명을 입력해 주세요.');
            return;
        } else if (typeof value !== 'string') {
            console.log('[오류] 입력된 모델명이 문자형이 아닙니다.');
            return;
        }
        this._modelName = value;
    }
    get modelName(){
        return this._modelName;
    }
    
    set modelYear(value) {
        if (value.length!==4) {
            console.log('[오류] 입력된 연도가 4자리가 아닙니다.');
            return;
        } else if (typeof value !== 'string') {
            console.log('[오류] 입력된 연도가 문자형이 아닙니다.');
            return;
        }
        this._modelYear=value;
    }
    get modelYear(){
        return this.modelYear;
    }
    
    set type(value) {
        if (value.length<=0) {
            console.log('[오류] 타입이 입력되지 않았습니다. 확인해주세요.');
            return;
        }else if (!(value==='g' && value==='d' && value==='e')) {
            console.log('[오류] 입력된 타입이 잘못되었습니다.');
            return;
        } 

        this._type=value;
    }
    get type(){
        return this._type;
    }
    
    set price(value) {
        if (typeof value !== 'number') {
            console.log('가격을 숫자로 입력하세요');
            return;
        } else if (value < 1000000) {
            console.log('[오류] 가격은 100만원보다 낮을 수 없습니다.');
            return;
        }
        this._price=value;
    }
    get price(){
        return this._price;
    }

    makeNoise() {
        console.log(`${this._modelName} 차가 클락션을 울렸습니다. 빵!`);
    }

    printModelYear() {
        console.log(`${this._modelName}차의 연식은 ${this._modelYear}입니다.`);
    }
}

class ElectronicCar extends Car {
    constructor (modelName, modelYear, price, chargeTime) {
        // 부모 class에도 알려줘야한다. super 키워드 (부모의 constructor)
        // 부모와 자식의 프로퍼티 동기를 위한 키워드
        super(modelName, modelYear,'e',price);
        this._chargeTime = chargeTime;
    }

    set chargeTime (value){
        this._chargeTime = value;
    }
    get chargeTime(){
        return this._chargeTime;
    }
}

const eleCar1 = new ElectronicCar('Tesler', "2023", 9000,60);
eleCar1.makeNoise();
eleCar1.printModelYear();
console.log(`before setter => ${eleCar1.chargeTime}`);
eleCar1.chargeTime = 20;
console.log(`after setter => ${eleCar1.chargeTime}`);
console.log('------------------------------------------------------')


const car1 = new Car('Sorento', '2023', 'e', 5000);
const car2 = new Car('SM5', '1999', 'g', 3000);
const car3 = new Car('Palisade', '2018','d',4500);

car1.makeNoise();
car1.printModelYear();

car2.makeNoise();
car2.printModelYear();

car3.makeNoise();
car3.printModelYear();