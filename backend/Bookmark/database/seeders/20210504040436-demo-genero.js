'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Generos', [
      {
        gen_nome: 'Testes',
        createdAt: '2021-05-04T14:32:42.000Z',
        updatedAt: '2021-05-04T14:32:42.000Z'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Generos', null, {});
  }
};
