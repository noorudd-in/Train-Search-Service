"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Trains",
      [
        {
          name: "Hussain Sagar Express",
          number: 12701,
          SL: 80,
          '3E': null,
          '3AC': 72,
          '2AC': 54,
          '1AC': null, 
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mumbai Express",
          number: 22731,
          SL: 80,
          '3E': null,
          '3AC': 72,
          '2AC': 54,
          '1AC': null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Punjab Mail",
          number: 12137,
          SL: 80,
          '3E': null,
          '3AC': 72,
          '2AC': 54,
          '1AC': 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Punjab Mail",
          number: 12138,
          SL: 80,
          '3E': null,
          '3AC': 72,
          '2AC': 54,
          '1AC': 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
