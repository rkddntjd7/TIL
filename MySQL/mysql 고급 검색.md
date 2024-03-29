# mysql 고급 검색

## index

- 검색을 빠르게 하기 위한 자료구조 (주로 b트리 계열)

  - 레코드 추가, 수정, 삭제 해당 컬럼으로 다시 정렬한 후 검색에 필요한 값들을 미리 계산해

    검색 속도를 높인다 (trade off)

  - 검색보다 추가 / 삭제가 빨라야 한다면 필요 없다.

- 기본 키는 자동으로 인덱스가 설정된다.

- 인덱스 on / off 를 통해 검색속도 차이 체감

- join 할 시에 영향을 줌

- create index 인덱스명 on 테이블명(컬럼명1, 컬럼명2....);

- alter table 테이블명 drop index 인덱스명;

## 정리

- 데이터 검색을 빠르게 하기 위한 보조 자료구조
- RDBMS의 핵심
- 데이터의 추가 / 수정 / 삭제 시 미리 정렬하고 검색에 필요한 자료구조 생성
- 대량의 데이터 일수록 성능 차이가 크다.
- 인덱스 설정기준 (보통 쿼리 시간이 0.5-1초 이상 걸리는 경우)
- 기본키는 기본적으로 생성
- 데이터 추가 / 수정 / 삭제의 성능이 중요한 경우에는 없애는 경우도 있다.