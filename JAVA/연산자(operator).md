# 💡연산자(operator)
## 📌1. 산술 연산자(arithmetic operator)
### 1-1 산술 연산자란?
> 산술 연산자란, 사칙연산을 다루는 연산자로 가장 많이 사용되는 연산자 중 하나이다.

![](https://velog.velcdn.com/images/rkddntjd7/post/f73024d1-efbc-48f3-a586-f25b343e2850/image.png)
출처 : http://www.tcpschool.com/java/java_operator_arithmetic
``` java
int num1 = 20;
int num2 = 10;

System.out.println(num1 + num2); // 30
System.out.println(num1 - num2); // 10
System.out.println(num1 * num2); // 200
System.out.println(num1 / num2); // 2
System.out.println(num1 % num2); // 0
```
### 1-2 연산자의 우선순위(operator precedence)
- 연산자의 우선 순위는 수학의 연산 우선순위와 거의 흡사하기 때문에 사진으로 설명을 대체하겠다
![](https://velog.velcdn.com/images/rkddntjd7/post/f6616ea6-d796-4a3a-8c30-b18d0e0008aa/image.png)
출처 : http://www.tcpschool.com/java/java_operator_arithmetic
## 📌2. 대입 연산자(assignment operator)
### 2-1 대입 연산자란?
> 대입 연산자란, 변수에 값을 대입할 때 사용하는 이항 연산자이다.

![](https://velog.velcdn.com/images/rkddntjd7/post/a5624d64-f100-4d9a-8a08-afcf9e6bad48/image.png)
출처 : http://www.tcpschool.com/java/java_operator_arithmetic

``` java
int num1 = 10;
int num2 = 10;

System.out.println(num1 - 5); // 5
System.out.println(num2 -= 5); // 5
```
## 📌3. 증감 연산자(increment and decrement operators)
### 3-1 증감 연산자란?
> 증감 연산자란, 피연산자를 1씩 증가 또는 감소시킬때 사용하는 연산자이다.

![](https://velog.velcdn.com/images/rkddntjd7/post/0d7f60b7-883b-4358-8ecd-762b5e0ca1b0/image.png)
출처 : http://www.tcpschool.com/java/java_operator_arithmetic
``` java
int num1 = 10;
int num2 = 10;

System.out.println(--num1 + 5); // 결과값: 14
System.out.println(num1-- + 5); // 결과값: 15
```
## 📌4. 비교 연산자(relational operator)
### 4-1 비교 연산자란?
> 비교 연산자란, 피연산자 사이의 상대적인 크기를 판단하는 연산자이다.

![](https://velog.velcdn.com/images/rkddntjd7/post/b2e5fb57-348f-471f-ac0e-985ca868b281/image.png)
출처 : http://www.tcpschool.com/java/java_operator_arithmetic

``` java
System.out.println(5 > 3); // 5는 3보다 크다 (참이면 true, 거짓이면 false)
System.out.println(5 >= 3); // 5는 3보다 크거나 같다.  (true)
System.out.println(( 5 >= 5)); // 5는 5보다 크거나 같다 (true)
System.out.println(5 >= 7); // 5는 7보다 크거나 같다 (false)

System.out.println(5 < 3); // 5는 3보다 작다 (false)
System.out.println(5 <= 3); // 5는 3보다 작거나 같아 (false)

System.out.println(5 == 5); // 5는 5와 같다 (true)
System.out.println( 5 == 3); // 5는 3과 같다 (false)
System.out.println(5 != 5); // 5는 5와 같지 않다. (false)
System.out.println(5 != 3); // 5는 3과 같지 않다 (true)
```

## 📌5. 논리 연산자(logical operator)
### 5-1 논리 연산자란?
> 논리 연산자란, 주어진 논리식을 판단하여, 참(true)과 거짓(false)를 결정하는 연산자이다.

![](https://velog.velcdn.com/images/rkddntjd7/post/c955a419-c89e-478a-afd2-b9c627954de8/image.png)
출처 : http://www.tcpschool.com/java/java_operator_arithmetic

``` java
// And 연산
System.out.println((5 > 3) && (3 > 1)); // 5는 3보다 크고, 3은 1보다 크다 (true)
System.out.println((5 > 3) && (3 < 1)); // 5논 3보다 크고, 3은 1보가 작 (false)
        
// Or 연산
System.out.println((5 > 3) || (3 > 1)); // 5는 3보가 크거나, 3은 1보다 크다 (true)
System.out.println((5 > 3) || (3 < 1)); // 5는 3보다 크거나, 3은 1보다 작다 (true)
System.out.println((5 < 3) || (3 < 1)); //5는 3보다 작거나, 3은 1보다 작다 (false)
        
// 논리 부정 연산자
System.out.println(!true); // false
System.out.println(!false); // true
System.out.println(!(5 == 5)); // false
System.out.println(!(5 == 3)); // true
```
 ## 📌6. 비트 연산자(bitwise operator)
 ### 6-1 비트 연산자란?
 > 비트 단위로 논리 연산을 할 때 사용되는 연산자이다.

 ![](https://velog.velcdn.com/images/rkddntjd7/post/bb799419-fbec-48a7-9e6a-f779908f0cca/image.png)
 출처 : http://www.tcpschool.com/java/java_operator_arithmetic

 ## 📌7. 삼항 연산자(ternary operator)
 ### 7-1 삼항 연산자란?
 > 삼항 연산자란, 피연산자를 세 개를 가지는 조건 연산자이다.

 ``` java
int x  = 3;
int y = 5;
int max = (x > y) ? x : y;
System.out.println(max); // 5

int min = (x < y) ? x : y;
System.out.println(min); // 3


x = 3;
y = 5;
boolean b = (x == y) ? true : false;
System.out.println(b); //false


String s = (x != y) ? "달라요" : "같아요";
System.out.println(s); // 달라요
 ```

 _**※위 블로그는 tcp school 사이트를 통해 학습하며, 참고하여 작성하였습니다.**_

 

 