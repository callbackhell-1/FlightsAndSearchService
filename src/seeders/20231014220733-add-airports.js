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
      "Airports",
      [
        {
          name: "Austin Airport",
          cityId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "pune Airport",
          cityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "patna Airport",
          cityId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "varanasi Airport",
          cityId: 9,
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
