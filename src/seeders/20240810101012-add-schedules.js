'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Schedules', [
      {
        train_id: 1,
        station_id: 1,
        arrival: null,
        departure: '21:50',
        stop: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 1,
        station_id: 2,
        arrival: '01:20',
        departure: '01:25',
        stop: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 1,
        station_id: 3,
        arrival: '05:25',
        departure: '05:30',
        stop: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 1,
        station_id: 4,
        arrival: '07:07',
        departure: '07:10',
        stop: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 1,
        station_id: 5,
        arrival: '12:05',
        departure: null,
        stop: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 2,
        station_id: 5,
        arrival: null,
        departure: '22:35',
        stop: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 2,
        station_id: 4,
        arrival: '02:35',
        departure: '02:38',
        stop: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 2,
        station_id: 3,
        arrival: '04:35',
        departure: '04:40',
        stop: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 2,
        station_id: 2,
        arrival: '08:55',
        departure: '09:00',
        stop: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 2,
        station_id: 1,
        arrival: '13:05',
        departure: null,
        stop: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
