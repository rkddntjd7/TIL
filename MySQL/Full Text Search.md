# Full Text Search

- 전문검색 (Full Text Search)

  - 기존 SQL의 Like 검색은 여러 개의 검색필터를 동시에 매칭시키는 방식으로 여러 조건문은

    and / or 을 포함 시킬 경우 심각한 성능 저하가 발생한다.

  - 만약 네이버 / 다음과 같은 포탈이라면

    - 단어를 입력하면 카페, 블로그, 이미지, 지도, 뉴스, 쇼핑등을 모두 검색한다.
    - cafe like '%단어%' or blog like '%단어%' or image like '%단어%'....

  - 이런 문제를 해결하기 위해 결과는 동일하지만 db 서버에 부담을 주지 않는 방식으로 full text search가 개발되었다.

  - 기본적으로 컬럼 내용 전체를 단순 문자열 (Plain Text)로 생각하고 검색하는 방식

  - 문자편집기의 편집 찾기/바꾸기 메뉴의 동작방식과 유사

- MySQL의  Full Text Search 방식

  - 자연어 검색
  - 불린 검색
  - 쿼리 확장 검색

- Full Text Search 인덱스 생성

  - MyISAM 스토리지 엔진만 지원 (5.5이하, 현재는 둘 다 가능)
  - 인덱스 생성방법 : alter table 테이블이름 add fulltext(컬럼명);

- 한글 검색을 위해서는 설정 파일 수정

  - my.ini(윈도우), my.cnf(맥 or 리눅스)

    [mysqld]

    ft_min_word_len = 2

    (2자 이상 단어에 대하여 적응하도록 수정 - 기본값은 4)

    (innodb인 경우)

    innodb_ft_min_token_size = 2

- as score

  - 검색의 정확도 확인하여 결과를 정확도에 대한 내림차순 정렬

- boolean 검색

  - 검색의 정확도에 따른 정렬이 안되고 연산자 사용한 구문 검색 가능

    필수단어 (+), 예외단어(-), 부분단어(*) 

    where match(컬럼명) against("단어*" -제외단어 in boolean mode);