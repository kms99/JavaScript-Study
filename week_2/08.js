// JavaScript는 객체와 배열을 통해 많고 다양하고 복잡한 프로그램을 만들어왔다.
// 하지만 현실세계를 반영하기에는 어려움이 있었다.
// 따라서 Map, Set 이라는 추가적인 자료구조가 등장하였다.

// Map, Set의 목적 : 기존의 객체나 배열보다 데이터의 구성, 검색, 사용을 효율적으로 처리


// 1. Map
// key / value pair
// key에 어떤 데이터타입 (유형)도 다 들어올 수 있다.
// Map은 Key가 정렬된 순서로 저장된다.
// 기능 - 검색, 삭제, 제거, 여부확인
// 대량데이터 처리에 유용

const myMap = new Map();
// 등록
myMap.set('key', 'value');

// 검색
myMap.get('key');

// 반복 for ~ of ~ / 메서드 => keys(모든키), values(모든값), entries(모든키/값의 쌍)
// Iterator 속성을 가지고 있기 때문에 반복(순회) 가능하다.

