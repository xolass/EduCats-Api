'use strict';

import { Sequelize, Model } from "sequelize";

const fs = require('fs');
const path = require('path');
const Seq = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
let db: any = {};

let sequelize: Sequelize;
if (config.use_env_variable) {
  sequelize = new Seq(process.env[config.use_env_variable], config);
} else {
  sequelize = new Seq(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file: String) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file: String) => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
