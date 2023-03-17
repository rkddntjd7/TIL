// (코딩테스트 문제) 

//    대문자와 소문자가 섞여있는 문자열 s가 있습니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution을 완성하시오.

//    'p', 'y' 모두 하나도 없는 경우는 항상 true를 리턴한다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않는다. 

//    예를 들어  s  가 pPoooyY 면 true 를 리턴하고 Padfyy면 false를 리턴한다. 

// function solution(s) {
//     let p_cnt = 0;
//     let y_cnt = 0;
//     for(let i = 0; i < s.length; i++) {
//         if(s[i] === 'p' || s[i] == 'P') {
//             p_cnt++;
//         }
//         else if(s[i] == 'y' || s[i] == 'Y') {
//             y_cnt++;
//         }
//     }
//     return p_cnt == y_cnt ? true : false;
// }

// console.log(solution("yYdfdfffpp"));

// function solution(s) {
//     return s.toUpperCase().split("p").length === s.toUpperCase().split("Y").length;
// }

function solution(s) {
    let p = s.match(/p/gi);
    let y = s.match(/y/gi);
   let pct = (p != null) ? p.length : 0;
   let yct = (y != null) ? y.length : 0;
    return pct == yct ? true : false;
}

console.log(solution("yYdfdfffpp"));