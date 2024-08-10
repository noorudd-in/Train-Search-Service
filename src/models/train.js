'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Train extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Schedule, {
        foreignKey: 'train_id'
      })
    }
  }
  Train.init({
    name: {type: DataTypes.STRING, allowNull: false},
    number: {type: DataTypes.INTEGER, allowNull: false, unique: true},
    coaches: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'Train',
  });
  return Train;
};