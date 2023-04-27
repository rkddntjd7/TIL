# JOIN

- 서로 다른 테이블을 공통 컬럼을 기준으로 합치는 테이블단위 연산

- 조인의 결과 테이블은 이전  테이블의 컬럼수의 합과 같다.

- select * from 테이블1 join  테이블2 on 테이블1.컬럼 = 테이블2.컬럼

- 조인 할 때 테이블1의 컬럼명과 테이블 2의 컬럼명이 같은 경우

  테이블명.컬럼명 으로 표시

  - 국가코드와 함께 그 나라의 GNP를 출력하라

    select city.countrycode, country.gnp 
    from city 
    join country 
    on city.countrycode = country.code;

- 조인은 내부조인(null값 허용불가) 과 외부조인(null값 허용) 이 있다.

  - 내부조인 : inner join 
    - null 값이 들어간 레코드는 조인 결과에서 빠짐
  - 외부조인 : left join
    - 왼쪽 테이블의 null 값을 포함해서 표시
  - 외부조인 : right join
    - 오른쪽 테이블의 null 값을 포함해서 표시
  - 외부조인 : full join
    - mysql은 지원하지 않음 (mysql UNION)

# 별명 (ALIAS)

- SQL 쿼리 결과 생성시 컬럼명에 대한 별명을 표시하는 기능
- select 테이블명, 컬럼명 as 별명 ...
- 조인시 많이 사용됨
- select city.countrycode as cityCode, city.name as cName from city where countrycode = 'kor'; 