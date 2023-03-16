// 5. 주어진 두 정수중 적어도 하나가 50이상 99이하이면 true 아니면 flase를 출력하라.
function a10(x,y){
    return(50<=x<=99 || 50<=y<=99);
  }
  console.log(a10(50,99));
  console.log(a10(5,99));
  console.log(a10(50,9));
  console.log(a10(5,9));
  let x= 29;
  let y=20;
  if(50<=x<=99 || 50<=y<=99){
    console.log("true");
  }else{
    console.log("false");
  }