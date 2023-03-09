// 6. 임의의 단어를 받아 처음 세 자를 소문자로 고쳐 출력하라. 단, 문자의 길이가 3자 이하이면 모두 대문자로 출력시켜라.
function upper_lower(str){
    if(str.length < 4){
      return str.toUpperCase();
    }
    const front_part = (str.substring(0,3)).toLowerCase();
    const back_part = str.substring(3, str.length);
    return front_part + back_part;
  }
  console.log(upper_lower("cat"));
  console.log(upper_lower("BASketball"));