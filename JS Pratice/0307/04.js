// 7. 단어의 시작이 Java로 시작하면 true 그렇지 않으면 false를 출력하라.
const str = "Javaabcdef";
if(str.slice(0,5)==="Java"){
  console.log("true");
}else{
  console.log("false");
}