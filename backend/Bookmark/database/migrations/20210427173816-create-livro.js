'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Livros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      autor_id: {
        type: Sequelize.INTEGER
      },
      genero_id: {
        type: Sequelize.INTEGER
      },
      livro_titulo: {
        type: Sequelize.TEXT
      },
      livro_subtitulo: {
        type: Sequelize.TEXT
      },
      livro_volume: {
        type: Sequelize.TEXT
      },
      livro_num_pag: {
        type: Sequelize.INTEGER
      },
      livro_capa: {
        type: Sequelize.BLOB
      },
      livro_editora: {
        type: Sequelize.TEXT
      },
      livro_sinopse: {
        type: Sequelize.TEXT
      },
      livro_avaliacao: {
        type: Sequelize.INTEGER
      },
      livro_previa: {
        type: Sequelize.BLOB
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
    await queryInterface.dropTable('Livros');
  }
};