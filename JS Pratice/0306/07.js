// 7. 주어진 두 수중 하나는 양수, 하나는 음수이면 true 를 출력하는 코드를 작성하라.
function positive(x,y){
    if((x < 0 && y > 0)||(x>0 && y < 0)){
      return true;
    }else{
      return false;
    }
    };
    console.log(positive(-1,1));
    console.log(positive(1,1));