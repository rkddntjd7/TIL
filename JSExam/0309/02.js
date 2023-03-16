// 2. 두 정수중 100에 가까운 정수를 찾는 코드를 작성하라.
function near_100 (x, y) {
    if (x == y) {
      return false;
    }
    let x1 = Math.abs (x - 100);
    let y1 = Math.abs (y - 100);
    if (x1 < y1) {
      return x;
    }
    if (y1 < x1) {
      return y;
    }
  }
  console.log(near_100 (99, 98));
  console.log(near_100 (100, 100));
  console.log(near_100 (1, 102));