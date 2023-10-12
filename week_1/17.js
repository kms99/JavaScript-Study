// 반복문 = for, while

for (let i=0; i<10; i++) {
    console.log('for문 돌아가고 있음',i);
}

// 배열과 for문
const arr = ['one','two','three','four','five'];
for (let i = 0 ;i<arr.length; i++){
    console.log(i);
    console.log(arr[i]);
}

// 조건문과 for문
// 0 ~ 10 중 2의 배수만 출력

// 1
for (let i=0; i<=10; i+=2){
    if (i!==0){
        console.log(i);
    }
}

// 2
for (let i=0; i<=10;i++){
    if (i!==0 && i%2 == 0){
        console.log(i);
    }
}

// for ~ in 문
// 객체를 순회하는 방법
let person = {
    name: 'Kim',
    age: 30,
    gender:'male',
}
for (let key in person) {
    console.log(key, ":", person[key] );
}