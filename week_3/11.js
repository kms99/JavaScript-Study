// AS-IS (변경 전)
// function Student (name, gender, school) {
//     this.name = name;
//     this.gender = gender;
//     this.school = school;
// }

// function Employee (name, gender, company) {
//     this.name = name;
//     this.gender = gender;
//     this.company = company;
// }

// var kd = new Student('길동', 'male', '서울대');
// var ks = new Employee('길순', 'female', '삼성');

// TO-BE (변경 후)
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

function Student (name, gender, school) {
    Person.call(this, name, gender); // Person 생성자함수에는 Student 인스턴스가 this 바인딩된다.
    this.school = school;
}

function Employee (name, gender, company) {
    Person.apply(this, [name, gender]); // Person 생성자함수에는 Employee 인스턴스가 this 바인딩된다.
    this.company = company;
}

var kd = new Student('길동', 'male', '서울대');
var ks = new Employee('길순', 'female', '삼성');

console.log(kd);
console.log(ks);
