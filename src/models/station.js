'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Schedule, {
        foreignKey: 'station_id'
      })
    }
  }
  Station.init({
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
    code: {type: DataTypes.STRING, allowNull: false, unique: true}
  }, {
    sequelize,
    modelName: 'Station',
  });
  return Station;
};