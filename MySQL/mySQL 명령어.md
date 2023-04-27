# MYSQL 명령어

- 주석처리

1. "#" 한 줄 주석
2. "--" 한 줄 주석 (--다음에 반드시 한 칸 공백)
3. /* */ 여러줄 주석

- mysql 접속 : 

  mysql -u아이디 -p 엔터 -> 비밀번호 입력

- show databases; :

  db의 리스트를 표시하라.

- use world; :

  world db를 사용하겠다.

- show tables; :

  world db의 테이블리스트를 표시하라.

- desc city; : 

  city 테이블의 구조를 표시하라.

- select * from city; : 

  city 테이블의 내용을 보여달라.

- select 필드이름 [], from 테이블이름;

- select 필드이름 from 테이블이름 where 필드이름='조건문';

- insert into 테이블명 (컬럼명) values (값);

- update 테이블명 set 컬럼명 = 값, ... where 조건절

- delete from 테이블명 where 조건절

- 쿼리결과 중복 제거 (Distinct)

  - select 결과값에서 특정 컬럼만 출력할 경우 중복된 값이 나올 경우가 있다. 

    이를 제거하기 위해 표시하는 기능.

  - select distinct 컬럼명1, 컬럼명2 from 테이블면 where 조건절

- 논리 연산자 (And, or, Not)

  - select * from 테이블명 where (not) 조건1 and / or (not) 조건2...

- 논리 연산자 (In, Between)

  - countrycode= 'kor' or countrycode = 'chn' or countrycode = 'jpn';

  - countrycode in('kor', 'chn', 'jpn');
  - select * from city where countrycode = 'kor' and (population >= 1000000 and population <= 5000000);
  - select * from city where countrycode ='kor' and (population between 1000000 and 5000000);

- 결과 정렬 (Oredr By)

  - select 문의 결과값을 특정한 컬럼을 기준으로 오름차순 / 내림차순으로 정렬해서 표시

    (기본값 오름차순)

  - select * from 테이블명 whrere 조건절 order by 컬럼명 asc / desc;

  - 기본값은 오름차순 (asc) 정렬임 / 어러개의 컬럼을 나열하면 순서대로 정렬됨
  
- 결과값 일부 조회 (limit, top, rownum)

  - SQL 쿼리 결과 중 상위 몇 개만 보여주는 쿼리
  - select * form 테이블명 where 조건절 order 정렬 limit 숫자
  - 비표준 기능임 (DB마다 다름)
    - MYSQL : LIMIT
    - ORACLE : ROWNUM
    - SQLSERVER : TOP
  
- 집함함수

  - 전체 레코드를 대상으로 특정 컬럼을 적용해서 한 개의 값을 리턴하는 함수

  - count(), avg(), sum(), min(), max(), first(), last(), ......

  -  국가코드가 kor인 도시의 수를 출력하라
    select count(*) from city where countrycode = 'kor';
    
  -  kor 도시의 인수구 총합, 평균을 구하라
    select sum(population) from city where countrycode = 'kor';
    select avg(population) from city where countrycode = 'kor';
    
  -  kor 도시의 인구수 중 최대값, 최소값을 구하라
    select min(population) from city where countrycode = 'kor';
    select max(population) from city where countrycode = 'kor';
    
    select population from city where countrycode = 'kor' order by population asc limit 1;
    
  - country 테이블 각 레코드의 Name컬럼의 글자수를 구하라.
  
    length() --> 레코드의 문자열 컬럼의 글자수를 리턴
  
    select length(name) from country;
  
  - country 테이블 나라명(Name컬럼)을 앞 세글자만 대문자로 표시하라.
  
    mid() --> 문자열의 중간부분을 리턴
  
    upper() / lower() 대문자 / 소문자로 리턴
  
    select upper(mid(name, 1, 3)) from country;
  
  - country 테이블의 기대수명(LifeExpectancy)을 소수점 첫째자리에서 반올림해 표시하라.
  
    round() - 숫자컬럼을 반올림해서 리턴



