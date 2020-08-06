'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.class = require('./class')(sequelize, Sequelize);
db.comment = require('./comment')(sequelize, Sequelize);
db.hashtag = require('./hashtag')(sequelize, Sequelize);
db.User = require('./User')(sequelize, Sequelize);
db.POST = require('./POST')(sequelize, Sequelize);


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
