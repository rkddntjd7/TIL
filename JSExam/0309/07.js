// 7. 학생의 시험점수를 기록하는 배열을 작성하고 평균을 구해 90이상이면 A, 80이상이면 B , 70이상이면 C, 60이상이면 D 그 미만이면 F를 출력시켜라.
function aver (scr) {
    // let sum = 0;
    // for(let i=0; i< scr.length; i++){
    //   sum += scr[i];
    // }
  
    const sum = scr.reduce ((arr, arrc, idx) => {
      return (arr += arrc);
    }, 0);
  
    const avr = sum / scr.length;
    if (avr >= 90) {
      return 'A';
    } else if (avr >= 80) {
      return 'B';
    } else if (avr >= 70) {
      return 'C';
    } else if (avr >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
  const stScore = [100, 90, 80, 90, 98];
  console.log (aver (stScore));