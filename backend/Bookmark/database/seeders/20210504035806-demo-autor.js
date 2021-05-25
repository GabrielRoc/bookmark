'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Autores', [
      {
        autor_name: 'Testerson da Silva',
        autor_biografia: 'Ele sempre testa tudo!',
        createdAt: '2021-05-04T14:32:42.000Z',
        updatedAt: '2021-05-04T14:32:42.000Z'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Autores', null, {});
  }
};
