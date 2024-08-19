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
        },
        {
          name: "Nashik Road",
          code: "NK",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jalgaon Jn",
          code: "JL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bhusaval Jn",
          code: "BSL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bhopal Jn",
          code: "BPL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Virangana Lakshmibai Jhansi",
          code: "VGLJ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Gwalior",
          code: "GWL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazrat Nizamuddin (New Delhi)",
          code: "NZM",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "New Delhi",
          code: "NDLS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bhatinda Jn",
          code: "BTI",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Firozpur Cant",
          code: "FZR",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Secunderabad Jn",
          code: "SC",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Warangal",
          code: "WL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Vijayawada Jn",
          code: "BZA",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rajahmundry",
          code: "RJY",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Visakhapatnam",
          code: "VSKP",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Srikakulam Road",
          code: "CHE",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Brahmapur",
          code: "BAM",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bhubaneswar",
          code: "BBS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mumbai Central",
          code: "MMCT",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Surat",
          code: "ST",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bharuch Jn",
          code: "BH",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Vadodara Jn",
          code: "BRC",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ratlam Jn",
          code: "RTM",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kota Jn",
          code: "KOTA",
          createdAt: new Date(),
          updatedAt: new Date()
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
