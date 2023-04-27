# database 백업

## 데이터베이스 백업

- mysqldump -u아이디 -p--all-database > 덤프파일명.sql
- p-all--database : 전체 데이터 백업
- -p --databases : 특정 데이터 백업
- -p db명 테이블명 : 특정 테이블 백업
- -p --no-data : 스키마만 백업
- -p-no-create-info : 데이터만 백업



- mysql -u아이디 -p db명 < 파일이름
- mysql -u아이디 -p db명 테이블명 < 파일명

## 저장 프로시저

create procedure 프로시저명(인자 인자형, ....)

begin

​	sql 문장들

end



call 프로시저명

drop procedure 프로시저명

## 저장함수

create function 함수명 (인자 인자형...) returns 타입

begin

​	sql문장

end



 함수명(인자)

drop function  함수명;

