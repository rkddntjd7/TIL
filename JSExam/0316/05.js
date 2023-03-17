// 5. 문자열을 받아 문자열 내의 모음의 갯수를 출력하는 함수를 작성하라.

function solution(str) {
    let vowel_list = "aeiouyAEIOUY";
    let vcount = 0;
    for (var x = 0; x < str.length; x++) {
        if(vowel_list.indexOf(str[x]) !== -1) {
            vcount += 1;
        }
    }
    return vcount;
}
console.log(solution("Hi My name is James Lee!"))
