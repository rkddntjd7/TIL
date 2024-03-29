# SQL & CRUD

- SQL의 정의와 특징

  - SQL(Structured Query Language) 
    - 데이터베이스에 있는 정보를 사용할 수 있도록 도와주는 언어
    - 문법이 다른 언어보다 쉽고 단순하다.
    - 대부분의 DBMS에서 같이 사용된다.
    - 인터프리터 언어
    - 대소문자를 구분하지 않는다. (데이터 내용은 구별함)

-  SQL의 종류

  - DML (Data Mainpulation Language)

    - 테이블의 데이터를 조작하는 기능

    - 테이블의 레코드를 CRUD (Create, Retrieve, Update, Delete)

      |  SQL   |     내 용     |
      | :----: | :-----------: |
      | insert | 데이터를 입력 |
      | delete | 데이터를 삭제 |
      | update | 데이터를 수정 |
      | select | 데이터를 검색 |

  -  DDL (Data Definition Language)

    - DB, 테이블의 스키마를 정의, 수정하는 기능

    - 테이블의 생성, 컬럼 추가, 타입변경, 각종 제약조건 지정, 수정 등

      |  SQL   |                        내용                        |
      | :----: | :------------------------------------------------: |
      | create |             데이터베이스의 객체를 생성             |
      |  drop  |              데이터베이스 객체를 삭제              |
      | alter  | 기존에 존재하는 데이터베이스 객체를 다시 정의한다. |

  - DCL (Data Control Language)

    - DB나 테이블의 접근권한이나 CRUD 권한을 정의하는 기능

    - 특정 사용자에게 테이블의 조회권환 허가 / 금지

      |  SQL   |                      내용                      |
      | :----: | :--------------------------------------------: |
      | crant  |      데이터베이스 객체에 권한을 부여한다       |
      | revoke | 이미 부여된 데이터베이스 객체 권한을 취소한다. |

  
