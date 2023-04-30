# JSP 페이지 디렉티브

![image-20230430223617325](C:\Users\KWS\AppData\Roaming\Typora\typora-user-images\image-20230430223617325.png)

- JSP 페이지 디렉티브는 아래의 표로 세부적인 설명을 대체하겠다.

​	가장 흥미로웠던 errorPage 부분만 예제를 통해 살펴보자!

1. errorPage : 에러가 났을 시 표시할 jsp 파일

2. isErrorPage : 해당 페이지에서 오류시 오류페이지로 이동한 default가 false이기 때문에 true로 지정해줘야 함!



![image-20230430223643350](C:\Users\KWS\AppData\Roaming\Typora\typora-user-images\image-20230430223643350.png)



위의 코드에서는 10 나누기 0 이 불가하므로 에러를 일부러 생성하여봤다.

해당 jsp 파일을 실행하여보면 아래와 같은 에러페이지가 뜨는것을 알 수 있다

(에러페이지는 미리 생성해놓은  Error.jsp 파일이다.)



![image-20230430234417507](C:\Users\KWS\AppData\Roaming\Typora\typora-user-images\image-20230430234417507.png)

인터넷을 많이 사용하다보면 에러페이지를 표시하는 화면이 종종나오는데, 이런식의 원리로 에러페이지가 뜨는구나 라는걸 알게되어 흥미로웠다