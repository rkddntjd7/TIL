//1. 임의의 세 개의 정수중 가장 큰 정수를 찾는 코드를 작성하라.
function max_num(x, y, z) {
    let maxVal = 0;
    if(x > y) {
        maxVal = x;
    }
    else {
        maxVal = y;
    }
    if (z > maxVal) {
        maxVal = z;
    }
    return maxVal;
}

console.log(max_num(10,30, 99));