// 6. 임의의 세개의 정수중 마지막 숫자가 같은지 확인하는 코드를 작성하라.

function solution(x, y, z) {
    if ((x > 0) && (y > 0) && (z > 0)) {
        return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
    }
    else {
        return false;
    }
}

console.log(solution(10, 300, 500));