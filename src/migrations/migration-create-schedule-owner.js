'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Schedules', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      idOwner: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.STRING
      },
      currrentNumber: {
        type: Sequelize.INTEGER,
        default: 0
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Schedules');
  }
};