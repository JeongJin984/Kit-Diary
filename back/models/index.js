'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.class = require('./class')(sequlize, Sequelize);
db.comment = require('./comment')(sequlize, Sequelize);
db.hashtag = require('./hashtag')(sequlize, Sequelize);
db.User = require('./User')(sequlize, Sequelize);
db.POST = require('./POST')(sequlize, Sequelize);


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
