# VIEW

- SQL 쿼리 결과를 임시테이블을 만들어서 저장해서 사용
- 사용 용도가 끝난 후에는 명시적으로 삭제해야한다. (drop view....)
- createv view 뷰이름 as select .....
- 국가코드가 kor인 도시들의 국가 코드와 국가명 뷰로 작성하자 (국가코드는 abbr 국가명은 fullname)
  - CREATE VIEW testview as
    select city.countrycode as abbr, country.name as fullname 
    from city join country 
    on city.countrycode = country.code
    where city.countrycode = 'kor';

# select into

- 쿼리결과를 새 테이블에 만든다.
- mysql, oracle : create table 테이블명 select * ....;
- mssql : select * into 카피테이블 from (select * ...) as temp_table;
- 기존에 존재하지 않는 테이블이 새로 생성된다. (뷰와 동일한 효과)
- city 테이블에서 국가 표시가 kor인 도시를 찾아서 city_new 테이블에 넣으시오
  - CREATE table city_new select * from city where countrycode = 'kor';
    show tables;
    select * from city_new;

# insert into select

- 쿼리결과를 기존의 테이블에 추가한다. (기존 테이블이 반드시 있어야한다.)
- insert into 테이블1 select from 테이블2 where 조건절;
- select 하는 테이블과 insert 하는 테이블은 동일한 구조를 가져여한다.
- 두 개의 별도 쿼리를 하나로 합친다.

# 조건문

- case when 조건값 1 then ...

  ​         when 조건값 2 then ...

  else....

  end

- city에서 도시명이 3자가 넘는 경우 앞쪽 세자만 대문자로 출력하면서 인구수를 같이 표기하자.

  - select 
    case when length(name) > 3 then upper(mid(name, 1, 3))
    	 when length(name) <= 3 then upper(name) 
    end as cor,
    population
    from city;