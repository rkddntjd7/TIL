// 8. 여러 과목의 시험점수를 배열로 받아 평균에 따라 A, B, C, D, ,F 등급을 부여해 출력 시켜라.
function solution(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const avg = sum / arr.length;
    if (avg > 89) {
        return "A";
    }
    else if (avg > 79) {
        return "B";
    }
    else if (avg > 69) {
        return "C";
    }
    else if (avg > 59) {
        return "D";
    }
    else {
        return "F";
    }
}

let jum = [95, 85, 70, 69];
console.log(solution(jum));