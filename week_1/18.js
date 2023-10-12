//while
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// do ~ while, 코드블록을 선 실행시켜 조건에 만족하지 않더라도 최소 한번은 실행시킨다.
i = 0;
do {
    console.log('do while문입니다 : ',i); //do while문입니다 :  0
    i++;
}while (i > 10)

// break 문
for (let i =0 ; i<10; i++){
    if (i===5){
        break; // 반복문 종료
    }
    console.log('break test : ', i);
}

// break 문
for (let i =0 ; i<10; i++){
    if (i===5){
        continue; // 조건문이 만족하면 현재 반복을 종료하고 다음 반복으로 진행
    }
    console.log('continue test : ', i);
}

// while문을 활용하여 3초과 100 미만의 숫자중 5의 배수만 출력
let num = 4;
while (num<100){
    if (num%5 === 0 && num>=5) {
        console.log(num,"는 5의 배수입니다.")
    }
    num++; // 증감식
}