// 2. 인자에 대한 제어권을 가진다.
// map 함수

var newArr = [10,20,30].map(function(index,num){
    console.log(`${index}=>${num}`);
    return num+5;
});

console.log(newArr);