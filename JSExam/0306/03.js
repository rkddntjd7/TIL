// 3. 주어진 숫자가 13보다 적으면 13과의 차이값을 구하고 13보다 크면 절대차이의 두 배를 반환하는 코드를 작성하라.
let num1 = prompt('숫자를 입력');
function df(n){
  if(n <=13){
    return 13-n;
  }else{
    return(n-13)*2;
  }
}
document.write(df(num1));