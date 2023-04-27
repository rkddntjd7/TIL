// 7. 영어로 된 문자열에서 처음 세개의 문자를 소문자로 변환하여 출력하는 코드를 작성하라. 
//단, 문자열의 길이가 3보다 작으면 모두 대문자로 출력하라

function solution(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    }
    const fPart = (str.substring(0, 3)).toLowerCase();
    const bPart = (str.substring(3, str.length));
    return fPart + bPart;
}

console.log(solution("Python"));
console.log(solution("hi"));
console.log(solution("JAVASCRIPT"));