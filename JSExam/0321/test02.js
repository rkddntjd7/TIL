//2. 임의의 두 개의 정수중 100에 가까운 정수를 찾는 코드를 작성하라.

function near100(x, y) {
    if (x != y) {
        let x1 = Math.abs(x - 100);
        let y1 = Math.abs(y - 100);
        if (x1 < y1) {
            return x;
        }
        if (y1 < x1) {
            return y;
        }
        return 0;
    }
    else {
        return false;
    }
}

console.log(near100(90, 89));
console.log(near100(-90, -89));
console.log(near100(90, 90));
console.log(near100(101,102));