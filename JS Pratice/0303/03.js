// 3. 컴퓨터가 선택한 1부터 10까지의 수중 하나의 정수를 사용자가 알아 맞추는 간단한 게임을 만드시오.

//    hint : 사용자는 prompt를 이용하여 수를 입력.  입력한 내용이 숫자가 아닌 경우 10이 넘어가는 경우 에러 출력

const num = Math.ceil(Math.random()*10);
console.log(num);
const ynum = prompt("1부터 10까지의 숫자중 하나를 입력하시오.");
if(ynum == num){
  document.write("배리굿");
}else{
  document.write("틀렸어요. 숫자는"+num+"입니다.");
}