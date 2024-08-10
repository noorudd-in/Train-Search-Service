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
      "Stations",
      [
        {
          name: "Chhatrapati Shivaji Maharaj Terminus (Mumbai)",
          code: "CSMT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pune",
          code: "PUNE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Solapur",
          code: "SUR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kalaburagi (Gulbarga)",
          code: "KLBG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nampally (Hyderabad)",
          code: "HYB",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
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
