# mySQL 명령어

1. mysql 접속 : 

   mysql -u아이디 -p 엔터 -> 비밀번호 입력

2. show databases; :

   db의 리스트를 표시하라.

3. use world; :

   world db를 사용하겠다.

4. show tables; :

   world db의 테이블리스트를 표시하라.

5. desc city; : 

   city 테이블의 구조를 표시하라.

6. select * from city; : 

   city 테이블의 내용을 보여달라.

7. select 필드이름 [], from 테이블이름;

8. select 필드이름 from 테이블이름 where 필드이름='조건문';

9. insert into 테이블명 (컬럼명) values (값);

10. update 테이블명 set 컬럼명 = 값, ... where 조건절

11. delete from 테이블명 where 조건절

- 주석처리

1. "#" 한 줄 주석
2.  "--" 한 줄 주석 (--다음에 반드시 한 칸 공백)
3.  /* */ 여러줄 주석