
// 5. 세 개의 양의 정수중 마지막 숫자가가 같은지 확인하는 코드를 작성하라.
function last_digit (x, y, z) {
    if (x > 0 && y > 0 && z > 0) {
      return (x % 10 == y % 10 && y % 10 == z % 10 && z % 10 == x % 10);
    } else {
      return false;
    }
  }
  console.log (last_digit (13, 23, 33));
  console.log (last_digit (11, 22, 22));