// 2. 문자열
let str = "Hello World!";
console.log(str);
console.log(typeof str);

// 2-1. 문자열의 길이
console.log(str.length);
// 2-2. 문자열 결합
let str1 = "Hello ";
let str2 = "Wolrd!";
let result = str1.concat(str2); // 인수로 받은 문자열을 붙혀서 저장
// let result = str1+str2;
console.log(result);

// 2-3. 문자열 자르기
let str3 = "Hello, World!";
console.log(str3.substr(7, 5)); //7인덱스에서 5개 출력
console.log(str3.slice(7,12)); //7인덱스부터 12인덱스 전까지 출력

// 2-4. 문자열 검색
let str4 = "Hello, World!";
console.log(str4.search("World")); //해당 문자열이 시작되는 인덱스 출력

// 2-5. 문자열 대체
let str5 = "Hello, World!";
let result01 = str5.replace("World!","JavaScript!"); // 문자열 내 World 문자열을 JavaScript로 변경 
console.log(result01);

// 2-6. 문자열 분할
let str6 = "apple, banana, kiwi";
let result02 = str6.split(','); // ','을 기준으로 문자열을 나누어 배열로 저장
console.log(result02);