// 자바스크립트의 문자열은 사전 순 비교
function sortingArray(strings, n){
    let stringsObj = {};
    let sortingArray = [];

    strings.forEach(str => {
        stringsObj[str[n]] = str;
        sortingArray.push(str[n]); 
    });

    sortingArray.sort();

    const answer = sortingArray.map(item=>{
        return stringsObj[item];
    })

    return answer;
}

console.log(sortingArray(["abce", "abcd", "cdx"],2));