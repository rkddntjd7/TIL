# DDL

- create database 데이터베이스 이름;
- create table 테이블 이름;

DB 자료형 (Data Types)

- 정수형

  - tiniint( -128 ~ 127까지 255개)
  - int (-21억 ~ 21억 / 43억 개)
  - Binint (-9경 ~ 9경 / 18경)

- 실수형

  - float

  - double

  - decimal

    쓰는 방식 : 타입 (크기, 소수점이하 자리수)

- 문자열

  - char (고정길이 문자열 최대 255)

  - varchar (가변길이 문자열 최대 65백)

    쓰는 방식 : 타입(크기)

- text 문자열

  - text (최대 65000)
  - mediuntext
  - lonttext

- blob ( binary large object)

  - blob (최대 65000)
  - mediumblob
  - largeblob

- time

  - date (YYYY-MM--DD), time (HH:MM:SS)
  - datetime, timestamp

# 제약조건 (Constraint)

- 입력 데이터의 제약 조건을 걸어 해당되지 않는 데이터는 입력되지 않게 하기 위함
- not null
  - null 값을 받지 않음
- unique
  - 동일한 값을 입력받지 않음
- pirmary key
  - 기본키 (기본적으로 not null, unique)
- foreign key
  - 외래키
- check
  - 입력값 체크 (예: age >= 0, mysql에는 없음)
- default
  - 컬럼값이 입력되지 않을 경우 기본값을 입력 (예: default '0' -> 0이 자동으로 입력)