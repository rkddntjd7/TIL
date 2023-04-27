# 💡제어문(control flow statements)
> 자바 프로그램이 원하는 결과를 얻기 위해서는 프로그램의 순차적인 흐름을 제어해야만 할 경우가 생긴다.
> 이때 사용하는 명령문을 제어문이라고 하며, 이러한 제어문에는 조건문, 반복문 등이 있다.
> 이러한 제어문에 속하는 명령문들은 중괄호({})로 둘러싸여 있으며, 이러한 중괄호 영역을 블록(block)이라고 한다.

## 📌1.조건문(conditional statements)
### 1-1 조건문이란?
> 조건문이라 주어진 조건의 따라 별도의 명령들을 수행하게 하는 명령문이다. 
> 자바에서 사용하는 대표적인 조건문은 아래와 같다.
- if문
- if / else 문
- if / else if / else 문
- switch 문

### 1-2 if문
- if 문은 조건식의 결과가 참(true)이면 주어진 명령문을 실행하며, 거짓(false)이면 아무것도 실행하지 않는다.
모든 제어문은 예제를 통해 공부하는것이 좋기때문에 많은 설명보다는 예제로 공부해보자!
> 문법
> if (조건식) {
> 조건식의 결과가 참일 때 실행하고자 하는 명령문;
> } else {
> 조건식의 결과가 거짓일 때 실행하고자 하는 명령문;
> }

``` java
if (20 > 18) {
  System.out.println("20이 18보다 크다.");
}
```
### 1-3 if / else 문
- if 문과 함께 사용하는 else 문은 if 문과는 반대로 주어진 조건식의 결과가 거짓(false)이면 주어진 명령문을 실행한다.
>문법
>if (조건식) {
>조건식의 결과가 참일 때 실행하고자 하는 명령문;
>} else {
>조건식의 결과가 거짓일 때 실행하고자 하는 명령문;
>}

``` java
int time = 20;
if (time < 18) {
  System.out.println("Good day.");
} else {
  System.out.println("Good evening.");
}
```
### 1-4 if / else if / else 문
- 두개의 if / else가 연달아 나온거라 생각하면되고, 조건식을 여러개 명시할 수 있어 if문을 좀 더 간결하게 표현가능하다.
> 문법
> if (조건식1) {
> 조건식1의 결과가 참일 때 실행하고자 하는 명령문;
> } else if (조건식2) {
> 조건식2의 결과가 참일 때 실행하고자 하는 명령문;
> } else {
> 조건식1의 결과도 거짓이고, 조건식2의 결과도 거짓일 때 실행하고자 하는 명령문;
> }
``` java
int time = 22;
if (time < 10) {
  System.out.println("Good morning.");
} else if (time < 18) {
  System.out.println("Good day.");
} else {
  System.out.println("Good evening.");
}
```
### 1-5 switch 문
- switch 문은 if / else 문과 마찬가지로 주어진 조건 값의 결과에 따라 프로그램이 다른 명령을 수행하도록 하는 조건문이다. switch 문은 가독성이 더 좋으며, 컴파일 속도가 빠른 편이다.
> switch (조건 값) {
> case 값1:
>    조건 값이 값1일 때 실행하고자 하는 명령문;
>    break;
> case 값2:
>    조건 값이 값2일 때 실행하고자 하는 명령문;
>    break;
> ...
> default:
>    조건 값이 어떠한 case 절에도 해당하지 않을 때 실행하고자 하는 명령문;
>    break;
> }
```java
    case 'a':
        System.out.println("해당 문자는 'A'입니다.");
        break;
    case 'e':
        System.out.println("해당 문자는 'E'입니다.");
        break;
    case 'i':
        System.out.println("해당 문자는 'I'입니다.");
        break;
    case 'o':
        System.out.println("해당 문자는 'O'입니다.");
        break;
    case 'u':
        System.out.println("해당 문자는 'U'입니다.");
        break;
    default:
        System.out.println("해당 문자는 모음이 아닙니다.");
        break;
}
```
- default 절은 예제와같이 마지막에 위치하는게 일반적이지만, case절 사이에 위채해도 상관없다. 각 case들과 마지막 default절에도 break;로 마무리가 되어있는걸 볼 수 있다. break 키워드는 해당 case절이나 default 절이 실행된 후 큰 switch 문을 빠져나가게하는 역할을 한다.

## 📌반복문(iteration statements)
> 반복문이란, 똑같은 명령을 일정 횟수만큼 반복하도록 하는 명령문이다.
> 자바에서 사용하는 반복문의 형태는 아래와 같다.
- while문
- do / while 문
- for 문
- Enhanced for 문

### 2-1 while 문
- while 문은 특정 조건을 만족할때까지 계속해서 명령문을 반복 실행한다.
> while (조건식) {
> 조건식의 결과가 참인 동안 반복적으로 실행하고자 하는 명령문;
> }

``` java
int i = 0;
while (i < 5) {
    System.out.println("while 문이 " + (i + 1) + "번째 반복 실행중입니다.");
    i++; // 이 부분을 삭제하면 무한 루프에 빠지게 됨.
}
System.out.println("while 문이 종료된 후 변수 i의 값은 " + i + "입니다.");
```
- while 문은 조건식이 참인지를 판단하여, 참이면 명령문을 실행한다. 명령문을 실행 후 다시 조건식으로 돌아와 참인지를 다시 판단한다.

### 2-2 do / while 문
- do / while 문은 조건이 참인지 확인하기 전에 무조건 한 번은 루프를 실행한다.
> do {
> 조건식의 결과가 참인 동안 반복적으로 실행하고자 하는 명령문;
> } while (조건식);
``` java 
int i = 1, j = 1;

while (i < 1) {
    System.out.println("while 문이 " + i + "번째 반복 실행중입니다.");
    i++; // 이 부분을 삭제하면 무한 루프에 빠지게 됨.
}
System.out.println("while 문이 종료된 후 변수 i의 값은 " + i + "입니다.");

do {
    System.out.println("do / while 문이 " + i + "번째 반복 실행중입니다.");
    j++; // 이 부분을 삭제하면 무한 루프에 빠지게 됨.
} while (j < 1);

System.out.println("do / while 문이 종료된 후 변수 j의 값은 " + j + "입니다.");
```
### 2-2 for 문
- for 문은 초기식, 조건식, 증감식을 모두 포함하는 반복문이다. while 문과 비교했을때 비교적 간결하다.
> for (초기식; 조건식; 증감식) {
> 조건식의 결과가 참인 동안 반복적으로 실행하고자 하는 명령문;
> }
``` java
for (i = 0; i < 5; i++) {
    System.out.println("for 문이 " + (i + 1) + "번째 반복 실행중입니다.");
}

System.out.println("for 문이 종료된 후 변수 i의 값은 " + i + "입니다.");
```
## 📌3. 기타 제어문
### 3-1 continue 문
- continue 문은 해당 루프의 나머지 부분을 건너뛰고, 바로 다음 조건식으로 넘어가게 하는 역할을 한다.
``` java
for (int i = 1; i <= 100; i++) {
    if (i % 5 == 0 || i % 7 == 0) {
        System.out.println(i);
    } else {
        continue;
    }
}
```

### 3-2 break 문
- break 문은 해당 반복문을 종료시킨 뒤, 다음 명령문을 실행시킨다.
``` java
int num = 1, sum = 0;

while (true) { // 무한 루프
    sum += num;
    if (num == 100) {
        break;
    }
    num++;
}

System.out.println(sum);
```

_**※위 블로그는 tcp school 사이트를 통해 학습하며, 참고하여 작성하였습니다.**_