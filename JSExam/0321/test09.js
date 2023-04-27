// 12. 임의의 문자를 입력하면 문자를 뒤집어 출력하는 코드를 작성하라.

let str = "가나다라마바사";
str = str.split(""); // 1개씩 자르기
str = str.reverse(); // 거꾸로 뒤집기
str = str.join(""); // 다시 붙이기
console.log(str);