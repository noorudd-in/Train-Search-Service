'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Train, {
        foreignKey: 'train_id',
        onDelete: 'CASCADE'
      })

      this.belongsTo(models.Station, {
        foreignKey: 'station_id',
        onDelete: 'CASCADE'
      })
    }
  }
  Schedule.init({
    train_id: {type: DataTypes.INTEGER, allowNull: false},
    station_id: {type: DataTypes.INTEGER, allowNull: false},
    arrival: {type: DataTypes.STRING, allowNull: false},
    departure: {type: DataTypes.STRING, allowNull: false},
    stop: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};