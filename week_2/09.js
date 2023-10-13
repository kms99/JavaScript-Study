const myMap = new Map();
// 등록
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

// 검색
console.log(myMap.get('one')); // 1
console.log(myMap.get('two')); // 2
console.log(myMap.get('three')); // 3

// 반복 for ~ of ~ / 메서드 => keys(모든키), values(모든값), entries(모든키/값의 쌍)
// Iterator 속성을 가지고 있기 때문에 반복(순회) 가능하다.
for (const key of myMap.keys()){
    console.log(`keys() => ${key}`);
}

for (const value of myMap.values()){
    console.log(`values() => ${value}`);
}

for (const [key, value] of myMap.entries()){
    console.log(`entries() => ${key} : ${value}`);
}

// Map 크기
console.log(myMap.size); // 3

// Map의 key 기반 검색
console.log(myMap.has("two")); //true
console.log(myMap.has("five")); //false