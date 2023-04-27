// 4. 40~60범위에 있는 정수 중 큰 수를 찾는 코드를 작성하라.

function maxT(x, y) {
    if ((x >= 40 && x <= 60) && (y >= 40 && y <= 60)){
        if(x > y) {
            return x;
        }
        else if (x < y) {
            return y;
        }
        else {
            return "두 수가 같습니다.";
        }
    }
    else {
        return "숫자가 40에서 60범위안에 있지 않습니다.";
    }
}

console.log(maxT(45, 55));
console.log(maxT(45, 39));
console.log(maxT(55, 55));