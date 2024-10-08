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
      {
        train_id: 3,
        station_id: 1,
        arrival: null,
        departure: '19:35',
        stop: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 3,
        station_id: 6,
        arrival: '22:55',
        departure: '23:00',
        stop: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 3,
        station_id: 7,
        arrival: '02:03',
        departure: '02:05',
        stop: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 3,
        station_id: 8,
        arrival: '02:40',
        departure: '02:45',
        stop: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 3,
        station_id: 9,
        arrival: '09:45',
        departure: '09:50',
        stop: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 3,
        station_id: 10,
        arrival: '14:15',
        departure: '14:23',
        stop: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 3,
        station_id: 11,
        arrival: '15:40',
        departure: '15:45',
        stop: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 3,
        station_id: 12,
        arrival: '20:55',
        departure: '20:57',
        stop: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 3,
        station_id: 13,
        arrival: '21:25',
        departure: '21:40',
        stop: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 3,
        station_id: 14,
        arrival: '02:45',
        departure: '03:10',
        stop: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 3,
        station_id: 15,
        arrival: '05:10',
        departure: null,
        stop: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 4,
        station_id: 15,
        arrival: null,
        departure: '21:55',
        stop: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 4,
        station_id: 14,
        arrival: '23:45',
        departure: '23:55',
        stop: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 4,
        station_id: 13,
        arrival: '04:55',
        departure: '05:10',
        stop: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 4,
        station_id: 12,
        arrival: '05:35',
        departure: '05:37',
        stop: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 4,
        station_id: 11,
        arrival: '10:19',
        departure: '10:21',
        stop: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 4,
        station_id: 10,
        arrival: '12:15',
        departure: '12:23',
        stop: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 4,
        station_id: 9,
        arrival: '16:35',
        departure: '16:40',
        stop: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 4,
        station_id: 8,
        arrival: '23:25',
        departure: '23:30',
        stop: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 4,
        station_id: 7,
        arrival: '00:01',
        departure: '00:03',
        stop: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 4,
        station_id: 6,
        arrival: '03:00',
        departure: '03:05',
        stop: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 4,
        station_id: 1,
        arrival: '07:35',
        departure: null,
        stop: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 5,
        station_id: 1,
        arrival: null,
        departure: '14:00',
        stop: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 5,
        station_id: 2,
        arrival: '17:55',
        departure: '18:00',
        stop: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 5,
        station_id: 3,
        arrival: '21:50',
        departure: '21:55',
        stop: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 5,
        station_id: 4,
        arrival: '23:15',
        departure: '23:18',
        stop: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 5,
        station_id: 16,
        arrival: '03:20',
        departure: '03:30',
        stop: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 5,
        station_id: 17,
        arrival: '05:42',
        departure: '05:44',
        stop: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 5,
        station_id: 18,
        arrival: '09:25',
        departure: '09:35',
        stop: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 5,
        station_id: 19,
        arrival: '11:33',
        departure: '11:35',
        stop: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 5,
        station_id: 20,
        arrival: '15:40',
        departure: '16:00',
        stop: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 5,
        station_id: 21,
        arrival: '17:48',
        departure: '17:50',
        stop: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 5,
        station_id: 22,
        arrival: '20:20',
        departure: '20:30',
        stop: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 5,
        station_id: 23,
        arrival: '23:20',
        departure: null,
        stop: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 6,
        station_id: 23,
        arrival: null,
        departure: '15:20',
        stop: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 6,
        station_id: 22,
        arrival: '17:25',
        departure: '17:35',
        stop: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 6,
        station_id: 21,
        arrival: '19:58',
        departure: '20:00',
        stop: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 6,
        station_id: 20,
        arrival: '22:00',
        departure: '22:20',
        stop: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 6,
        station_id: 19,
        arrival: '01:38',
        departure: '01:40',
        stop: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 6,
        station_id: 18,
        arrival: '04:50',
        departure: '05:05',
        stop: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 6,
        station_id: 17,
        arrival: '07:58',
        departure: '08:00',
        stop: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 6,
        station_id: 16,
        arrival: '10:50',
        departure: '11:00',
        stop: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 6,
        station_id: 4,
        arrival: '15:47',
        departure: '15:50',
        stop: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 6,
        station_id: 3,
        arrival: '18:00',
        departure: '18:05',
        stop: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 6,
        station_id: 2,
        arrival: '23:35',
        departure: '23:40',
        stop: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 6,
        station_id: 1,
        arrival: '02:40',
        departure: '02:43',
        stop: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 7,
        station_id: 24,
        arrival: null,
        departure: '17:10',
        stop: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 7,
        station_id: 25,
        arrival: '20:10',
        departure: '20:15',
        stop: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 7,
        station_id: 26,
        arrival: '20:53',
        departure: '20:55',
        stop: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 7,
        station_id: 27,
        arrival: '21:44',
        departure: '21:54',
        stop: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 7,
        station_id: 28,
        arrival: '01:13',
        departure: '01:15',
        stop: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 7,
        station_id: 29,
        arrival: '04:05',
        departure: '04:15',
        stop: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 7,
        station_id: 12,
        arrival: '09:43',
        departure: null,
        stop: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 8,
        station_id: 13,
        arrival: null,
        departure: '16:55',
        stop: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 8,
        station_id: 29,
        arrival: '21:30',
        departure: '21:40',
        stop: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 8,
        station_id: 28,
        arrival: '00:30',
        departure: '00:33',
        stop: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 8,
        station_id: 27,
        arrival: '03:40',
        departure: '03:50',
        stop: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 8,
        station_id: 25,
        arrival: '05:13',
        departure: '05:18',
        stop: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        train_id: 8,
        station_id: 24,
        arrival: '08:35',
        departure: null,
        stop: 6,
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
