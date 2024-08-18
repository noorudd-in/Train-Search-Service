'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trains', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      SL: {
        type: Sequelize.INTEGER,
      },
      '3E': {
        type: Sequelize.INTEGER,
      },
      '3A': {
        type: Sequelize.INTEGER,
      },
      '2A': {
        type: Sequelize.INTEGER,
      },
      '1A': {
        type: Sequelize.INTEGER,
      },
      ladies: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 6
      },
      senior_citizen: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 6
      },
      tatkal: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 6
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Trains');
  }
};