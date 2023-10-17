class Car{
    constructor (modelName, modelYear, type, price) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    makeNoise() {
        console.log(`${this.modelName} 차가 클락션을 울렸습니다. 빵!`);
    }

    printModelYear() {
        console.log(`${this.modelName}차의 연식은 ${this.modelYear}입니다.`);
    }
}

const car1 = new Car('Sorento', '2023', 'e', 5000);
const car2 = new Car('SM5', '1999', 'g', 3000);
const car3 = new Car('Palisade', '2018','d',4500);


car1.makeNoise();
car1.printModelYear();

car2.makeNoise();
car2.printModelYear();

car3.makeNoise();
car3.printModelYear();