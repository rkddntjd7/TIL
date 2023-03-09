// 5. 두 개의 주어진 숫자를 확인하고 숫자중 하나가 50이거나 두 수의 합이 50이면 true를 반환하라.
function t50(x,y){
    return (x==50 || y==50 || (x+y)==50);
  }
  console.log(t50(20,50));
  console.log(t50(10,20));
  console.log(t50(10,40));
  console.log(t50(50,50));