"use strict";
const { Model } = require("sequelize");
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
        foreignKey: "train_id",
      });
    }
  }
  Train.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      number: { type: DataTypes.INTEGER, allowNull: false, unique: true },
      SL: DataTypes.INTEGER,
      "3E": DataTypes.INTEGER,
      "3A": DataTypes.INTEGER,
      "2A": DataTypes.INTEGER,
      "1A": DataTypes.INTEGER,
      ladies: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 6 },
      senior_citizen: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 6,
      },
      tatkal: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 10 },
    },
    {
      sequelize,
      modelName: "Train",
    }
  );
  return Train;
};
