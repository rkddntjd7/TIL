// 1. 세 개의 정수중 가장 큰 수를 찾는 코드를 작성하라.
//1-1
function max_of_three(x, y, z){
    let v= 0;
    if(x>y){
      v = x;
    }else{
      v = y;
    }
    if(z > v){
      v = z;
    }
    return v;
  }
  console.log(max_of_three(1,2,3));
  console.log(max_of_three(10,4,20));
  console.log(max_of_three(12,200,3));
  
  //1-2
  function max_of_three (x, y, z) {
    const arr = [x, y, z];
    let v = -Infinity;
    for (let i = 0; i < arr.length; i++){
      if(v < arr[i]){
        v= arr[i]
      }
    }
    return v;
  }
   console.log(max_of_three(1,2,3));
   console.log(max_of_three(10,4,20));
   console.log(max_of_three(12,200,3));
  
  //1-3
  function max_fo_three(x, y, z){
    return Math.max(x,y,z);
  }
  console.log( max_fo_three(1, 2, 3))