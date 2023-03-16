// 1. 주어진 해가 윤년인지 아닌지 판별하는 코드를 작성하시오.
function leapyear(year){
    return (year %100 === 0) ? (year % 400 === 0) : (year % 4 ===0);
    }
    
    console.log(leapyear(2023));
    console.log(leapyear(2024));
    console.log(leapyear(3000));
    console.log(leapyear(2000));