// 6. 주어진 정수와 100 또는 400의 차의 절대값이 20 이내인지 확인하는 코드를 작성하라.
function testh(x){
    return ((Math.abs(100-x)<=20)||(Math.abs(400-x)<=20));
  }
  console.log(testh(10));
  console.log(testh(20));
  console.log(testh(90));
  console.log(testh(500));
  console.log(testh(50));
  console.log(testh(600));