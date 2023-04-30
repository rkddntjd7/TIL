# JSP 스크립트 요소

## 스크립트릿 <% %>

- 스크립트 릿은 가장 일반적으로 JSP페이지에서 많이 쓰이는 스크립트 요소로 주로 프로그래밍의 로직을 기술할 때 많이 쓰인다.

  스크릿트릿에서 선언한 변수는 JSP 페이지가 서블릿으로 변환될때 지역변수로 사용된다.

  > 문법
  >
  > <%
  >
  > ​	자바 코드 삽입
  >
  > %>



## 선언문 <%! %>

- 선언문은 일반적으로 JSP페이지에서 자바의 멤버변수 또는 멤버 메소드로 사용하고자 할때 주로 사용되는 프로그래밍의 로직 기술이다.

  선언문의 변수는 서블릿으로 변환될 때 멤버변수로 변환되고 선언문에서의 메소드는 서블릿에서 메소드로 만들어진다.

  > 문법
  >
  > <%!
  >
  > ​	자바 코드 삽입
  >
  > %>



## 표현식 <%= %>

- 표현식은 일반적으로 JSP페이지에서 자바의 System.out.println() 과 유사하게 사용된다. 데이터 출력을 할때 주로 사용되는 프로그래밍의 로직 기술이다.

  > 문법
  >
  > <%=
  >
  > ​	자바 코드 삽입
  >
  > %>



![image-20230430230155816](C:\Users\KWS\AppData\Roaming\Typora\typora-user-images\image-20230430230155816.png)

위의 예제는 1부터 10까지의 수를 스크립트릿과 표현식을 이용하여 코딩한 모습이다!!

출력된 브라우저의 모습은 아래와 같다.

![image-20230430230251600](C:\Users\KWS\AppData\Roaming\Typora\typora-user-images\image-20230430230251600.png)

비슷한 예제로 구구단도 만들어보자!

![image-20230430230334940](C:\Users\KWS\AppData\Roaming\Typora\typora-user-images\image-20230430230334940.png)

브라우저의 모습은 아래와같다!

![image-20230430230351544](C:\Users\KWS\AppData\Roaming\Typora\typora-user-images\image-20230430230351544.png)

![image-20230430234145959](C:\Users\KWS\AppData\Roaming\Typora\typora-user-images\image-20230430234145959.png)

위는 선언문을 사용한 간단한 예제이다!