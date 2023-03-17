// 2. 문자열의 모든 조합을 출력하는 함수를 작성하라.

//   예) dog  ==> d, o, do, g, dg, og, dog

function subs(str) {
    const result = [];

    function search_combinations(start, curr) {
        if(curr.length > 0) {
            result.push(curr);
        }
        for (let i = start; i < str.length; i++) {
            search_combinations( i + 1, curr + str[i]);
        }
    }
    search_combinations(0, '');
    return result;
}

const str = "dog";
console.log(subs(str));