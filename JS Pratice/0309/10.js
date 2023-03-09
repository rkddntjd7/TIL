// 10.
// 1) loop검색 알고리즘을 이용하여 배열에서 주어진 요소의 색인을 찾는 코드를 작성하라.
// 2) 삼항검색 알고리즘을 이용하여 배열에서 주어진 요소의 색인을 찾는 코드를 작성하라.

// const listSearch = (arr, item) => {
    function listSearch(arr, item){
        for(let i = 0; i < arr.length; i++){
          if(arr[i] === item){
            return +i;
          }
        }
        return -1;
      }
      
      const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      
      console.log(listSearch(nums, 3));