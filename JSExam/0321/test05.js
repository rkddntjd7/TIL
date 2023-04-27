// 5. 임의의 문자열에서 두 번째에서 네 번째위치에 문자가 있는지 확인하는 코드를 작성하라.

function solution(str, s) {
    let ok = false;
    for (let i = 0; i < str.length; i++) {
        if((str.charAt(i) == s) && (i >= 1 && i <= 3)) {
            ok = true;
            return ok;
        } 
    }
    return ok;
} 

console.log(solution("JavaScript", "a"));
console.log(solution("JavaScript", "f"));