# Like

- 정확한 키워드를 모를 경우 일부만으로 검색하는 방법

- 와일드카드 (%, _) 를 사용하여 패턴매칭

- select 컬럼명 from 테이블명 where 컬럼명 like 패턴

- % -> 0~n , _ : 1글자

- like 검색은 dbms에 부담이 많다. 따라서 like에 or와 같은 논리조건자를 중복해서 사용하는 것은 좋지 않다.

  select * from 테이블명 where like  컬럼1명 like .... or 컬럼명2 like

# Null

- null 이란 해당 컬럼의 값이 없다는 것을 의미한다. (컬럼이 null을 허용하는 경우)
- 해당 컬럼이 null인지 아닌지 검색 isNull
- null이 아닌 값을 가지고 있는지 검색하는 것은 is not null

# Null 함수

- 숫자컬럼을 연산해야 할 때 null을 처리해주는 함수

- null  값이 나오면 다른 값 (주로 0)으로 대체해서 계산에 문제 없도록 처리

- if null / coalesce(mysql), isnull (sql sever), nvl (오라클)

- 숫자연산 / 집합함수 (예 : sum())의 경우는 처리가 내장되어있다.

- 직접 함수나 쿼리에 넣는 경우에는 null 함수를 사용해서 처리해야한다.

- country 테이블에서 기대수명의 평균값 계산 -> null 값을 반영 / null 값을 미반영

  avg()

- country 테이블에서 기대수명이 들어 있는 개수를 표시 -> null 값을 반영 / null 값을 미반영

  count()

# Group By / Having

- 집합함수와 같이 사용해 그룹별 연산을 적용시킨다.
- select 컬럼명 , 집합함수명(컬럼명) from 테이블명 group by 컬럼명;
- Having은 집합연산에 where 조건절로 대체로 사용된다.
- select countrycode, count(countrycode) from city group by countrycode having count(countycode) >= 70;

# 서브쿼리 (subQuery)

- 쿼리문 내에 또다른 쿼리문이 있는 형태

- 서브쿼리는 메인쿼리에 포함되는 관계
  - () 를 이용해서 감싸는 형태
  - order by 를 사용하지 못한다.
  
- 사용 가능한 위치
  - select / from / where / having / order by / value (insert) / set (update) ....
  
- 종류
  - 단일행 (single row) 서브쿼리 (결과가 레코드 하나, 일반연산자 ( = , >, < ...) 사용)
  
  - 다중행 (multi row) 서브쿼리 (결과가 레코드 여러 개, 다중행 연산자 (in, all, any, exists) 사용)
  
    - all
  
      and 의 효과 (가장 큰 값보단 큰)
  
    - any
  
      or 효과 (가장 작은 값보다 큰)
  
    - in / exists
  
      결과값 중에 있는 것 중에서 의미 있는 것
  
      in은 전체 레코드를 스캔하고. exists는 존재여부만 확인하고 스캔하지않는다. (상대적으로 빠름)
  
      존재하면 true / 존재하지않으면 false
  
  - 다중컬럼 (multi column) 서브쿼리 (결과 컬럼이 여러 개인 서브쿼리)

# 집합연산

- 합집합 (union), 교집합 (intersect), 차집합 (minus)....
- mysql은 교집합과 차집합을 지원하지 않음
- union -> 두 쿼리 결과값을 합쳐서 리턴
  - select 쿼리 1 union 쿼리2 union 쿼리3
  - 조건 : 각 쿼리의 결과 형식이 동일해야 함. (기본적으로 distinct 적용)
  - 다른 테이블이라도 결과 형식만 일치하면 된다.
- union all -> 중복을 허용하는 union 
- intersect -> 두 쿼리 결과값 중 공통값만 리턴
  - select 쿼리 1 instersect select 쿼리2
  - 두 쿼리 결과 형식이 동일해야 한다. (기본적으로 distinct 적용)
  - 다른 테이블이라로 결과값의 형식만 일치하면 된다.
  - country 테이블에서 기대수명이 80 이상이고 인구가 100만 이상인 나라를 표시하시오.
    - select code from country where lifeexpectancy >= 80
      intersect
      select code from country where population >= 1000000;
- minus / except -> 쿼리 1 결과값에서 쿼리2 결과값을 빼 리턴
  - select 쿼리1 minus select 쿼리2