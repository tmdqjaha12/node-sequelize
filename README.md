create project
npm init
npm i path cookie-parser morgan cors express-fileupload ip moment mysql dotenv sequelize mysql2 sequelize-cli
npm i nodemon --save-dev

시퀄라이저 사용법
마이그레이션: sequelize db:migrate --env development
마이그레이션 취소: sequelize db:migrate:undo --env development.

<참고사항>
migrations
데이터베이스에 테이블에 필드 정보가 변경되거나 구조가 바뀌는 등과 같이 특수한 상황에서 사용된다.

seeders
seeders 파일은 서버를 실행하거나 콘솔 창에서 명령어를 실행 시 sequelize를 통해 DB에 데이터를 생성할 때 사용된다.
