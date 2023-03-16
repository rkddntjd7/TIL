// 4. 두 정수의 합을 계산하는 프로그램을 작성하라. 단 두 값이 같으면 합의 세배를 반환하라.
function sutoAdd(n1,n2){
    if(n1 == n2){
      return 3*(n1+n2);
    }else{
      return (n1+n2);
    }
  }
  console.log(sutoAdd(10,20));
  console.log(sutoAdd(20,20));