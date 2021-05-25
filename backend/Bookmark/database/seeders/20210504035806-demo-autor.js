'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Autores', [
      {
        autor_name: 'Testerson da Silva',
        autor_biografia: 'Ele sempre testa tudo!',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Autores', null, {});
  }
};
