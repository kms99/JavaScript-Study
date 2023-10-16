// 2. 인자에 대한 제어권을 가진다.
// map 함수
// 콜백함수로 사용 될 때 컴퓨터는 해당 매개변수의 순서에 따라서 인식한다.
// 따라서 콜백함수로 사용할 때 규칙에 따라서 매개변수를 사용해야한다.

var newArr = [10,20,30].map(function(num,index){
    console.log(`${index}=>${num}`);
    return num+5;
});

console.log(newArr);