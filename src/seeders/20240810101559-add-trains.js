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
          coaches: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mumbai Express",
          number: 22731,
          coaches: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Punjab Mail",
          number: 12137,
          coaches: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Punjab Mail",
          number: 12138,
          coaches: 23,
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
