// 4. 임의의 단어중 한 자가 2번째에서 4번째 안에 있는지 확인하는 코드를 작성하라.
//    예)  Python  ,   y    ===>  true
function check_char(str, char){
    let ctr = 0;
    for(let i=0; i<str.length; i++){
      if((str.charAt(i) == char) && (i>=1 && i<=3)){
        ctr =1;
        break;
      }
    }
    if(ctr ==1) return true;
    return false;
  }
  console.log(check_char("python","y"));
  console.log(check_char("홍길동","길"));
  console.log(check_char("javascript","s"));