# DCL (Data Control Language)

- 권한부여 : grant / 권한회수 : revoke
- mysql 5.7 이전 버전 (아이디 생성과 db권한 부여를 동시에)

  - create all privileges on DB명.*to 아이디명@'%' identified by '비밀번호' width grant option
- mysql 5.7 이후 버전 (아이디 생성 따로, 유 권한 부여 따로)

  - create user '유저아이디'@'localhost' identified by '비밀번호';
  - grant all privileges on DB명.*to 아이디명@'%' width grant option;
- 권한 부여 완료가 되면 적용되도록

  - flush privileges;
- 사용자별 권한 조회

  - show grants for '사용자계정@'호스트';
- 접속된 계정 권한 확인

  - show grants for current_user;
- 모든 권한 추가
  - all privileges
- 권한을 해당되는 부분만 부여
  - select, insert, update, delete ...
- 디비명.* (모든 table에 권한 부여)
- 디비명.테이블명 (해당테이블에만 권한 부여)