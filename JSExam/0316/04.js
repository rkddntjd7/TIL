//4. 문자열을 받아서 각 단어의 첫자를 대문자로 출력하는 함수를 작성하라.

//예) the quick brown fox ==> The Quick Broun Fox

function uppercase(str) {
    let array = str.split(" ");
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1)); // 첫번쨰 문자 추출 대문자로 변경
    }
    return newArray.join(" ");
}

console.log(uppercase("the quick brown fox"));