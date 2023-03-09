// 우리 수업의 수료일은 7월10일 입니다. 7월 10일까지 남은 날짜를 계산하는 코드를 작성하세요.
var dday = new Date("July 10, 2023, 18:00:00").getTime();

setInterval(function() {
  var today = new Date().getTime();
  var gap = dday - today;
  var day = Math.ceil(gap / (1000 * 60 * 60 * 24));
  var hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.ceil((gap % (1000 * 60)) / 1000);

  document.getElementById("count").innerHTML = "!!수료까지!! " + day + "일 " + hour + "시간 " + min + "분 " + sec + "초 남았습니다.";
}, 1000);


// const today = new Date();
// const grday = new Date(today.getFullYear(), 6, 10);
// if(today.getMonth()===6 && today.getDate()>10){
//   console.log("아마 수료했어요.");
// }
// const oneDay = 24*60*60*1000;
// const endDay = Math.ceil((grday.getTime()-today.getTime())/oneDay);
// console.log("남은 시간은" + endDay+"일입니다.");