## 프로젝트 중간에 발생한 오류 및 해결방법에 대해 기록한다.
---

#### 1. Client does not support authentication protocol requested by server; consider upgrading MySQL client
- 해결방법 : 아래 쿼리를 MySQL Workbench 에서 실행한다.  
ALTER USER '[사용자이름]'@'localhost' IDENTIFIED WITH mysql_native_password BY '[비밀번호]'  
flush privileges