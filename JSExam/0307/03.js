
// 3. 주어진 양수가 3의 배수 또는 7의 배수면 true 아니면 false를 출력하라.
function a10(num){
    return(num%3==0 || num%7==0);
  }
  console.log(a10(3));
  console.log(a10(7));
  console.log(a10(10));