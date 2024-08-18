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
          '3A': 72,
          '2A': 54,
          '1A': null,
          ladies: 6,
          senior_citizen: 6,
          tatkal: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mumbai Express",
          number: 22731,
          SL: 80,
          '3E': null,
          '3A': 72,
          '2A': 54,
          '1A': null,
          ladies: 6,
          senior_citizen: 6,
          tatkal: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Punjab Mail",
          number: 12137,
          SL: 80,
          '3E': null,
          '3A': 72,
          '2A': 54,
          '1A': 26,
          ladies: 6,
          senior_citizen: 6,
          tatkal: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Punjab Mail",
          number: 12138,
          SL: 80,
          '3E': null,
          '3A': 72,
          '2A': 54,
          '1A': 26,
          ladies: 6,
          senior_citizen: 6,
          tatkal: 10,
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
