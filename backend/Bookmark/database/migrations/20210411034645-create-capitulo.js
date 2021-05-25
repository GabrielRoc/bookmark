'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Capitulos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      livro_id: {
        type: Sequelize.INTEGER
      },
      cap_num: {
        type: Sequelize.INTEGER
      },
      cap_nome: {
        type: Sequelize.TEXT
      },
      cap_pag_inicial: {
        type: Sequelize.INTEGER
      },
      cap_pag_final: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Capitulos');
  }
};