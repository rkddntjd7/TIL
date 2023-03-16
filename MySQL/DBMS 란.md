# DBMS 란.

- DataBase(데이터를) Managment(관리하는) System(시스템)
	- DB : 테이블이 모여 이루는 데이터 단위
	
- 데이터를 저장하고 유지보수
	- CRUD (Creat 등록, Retrieve 검색, Updata 수정, Delete 삭제)
	
- 대량의 데이터를 처리하기 위함.

- 다양한 자료구조와 검색구조(소팅, 인덱상...) 이용해 빠른 검색이 가능하다.

- 대부분의 시스템은 R >>>>> cud의 빈도수가 많다.

- 검색에 최적화
	- 빠른 검색을 위해서는 -> 데이터가 반드시 정렬되어 있어야 함.
	
	- 인덱스
	
	  - 이진검색 / B-Tree 이 주로 사용됨.
	
	  - 상용 DBMS 에서는 B-Tree 계열 검색을 많이 사용
	- 데이터가 추가/수정/삭제 될 때 마다 정렬(인덱스)가 업데이트 됨.

# DBMS 종류

- 계층형 데이터베이스

- 네트워크 데이터베이스

- 관계형 데이터베이스 (RDBMS)
  
  - 관계형(Relational) 데이터 베이스 시스템
  
  - 테이블(Table based) 기반의 DBMS
  
    - 테이블 - 컬럼형태의 데이터 저장 방식
  
    - column(열) : 각각의 열은 유일한 이름, 자신의 타입이 있음, 
  
      이러한 열을 flield 또는 attribute(속성) 이라고도 불림
  
    - row(행) :  관계된 데이터의 묶음. 한 테이블의 모든 행은 같은 수의 열을 갖는다.
  
      이러한 행을 tuple(튜플) 또는 record(레코드)라고 한다.
  
    - value(값) : 테이블은 각각의 행과 열에 대응하는 값
  
    - key(키) : 테이블 행의 식별자로 이용되는 열을 (key) 또는 기본 키(primary key)
  
    - relationship(관계) : 테이블 간의 관계(테이블간의 연관관계 - 주로 외래키형태)
  
    - schema(스키마) : 테이블 디자인을 위한 일종의 청사진
  
  - SQL 쿼리(SQL 쿼리)
  
    -  RDBMS 질의 언어
    - 대소문자 가리지 않음.
    - interprinter 언어
  
  - DB의 종류
  
    - Oracle : 유료 / unix, linux, windows
    - SQL Server : 유료 / Microsoft windows
    - mySQL : 무료 => 유료 : unix, linux, window, mac
    - mariaDB == mySQL 
    - PostgreSQL : 무료 / unix, linux, window, mac
  
- 객체지향 데이터베이스

- 객체관계형 데이터베이스 (ORDBMS)

- NoSQL (Not Only SQL)

  



