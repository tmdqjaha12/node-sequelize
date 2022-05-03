const path = require("path");
const Sequelize = require("sequelize");

// 클래스를 불러온다.
const User = require("./user.model");
const Comment = require("./comment.model");

const NODE_ENV = require("dotenv").config().parsed.NODE_ENV;
const env = NODE_ENV || "development";
const config = require(path.join(__dirname, "./_config.json"))[env];

const db = {};

// new Sequelize를 통해 MySQL 연결 객체를 생성한다.
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 연결객체를 나중에 재사용하기 위해 db.sequelize에 넣어둔다.
db.sequelize = sequelize;

// 모델 클래스를 넣음.
db.User = User;
db.Comment = Comment;

// 모델과 테이블 종합적인 연결이 설정된다.
User.init(sequelize);
Comment.init(sequelize);

// db객체 안에 있는 모델들 간의 관계가 설정된다.
User.associate(db);
Comment.associate(db);

module.exports = db;
