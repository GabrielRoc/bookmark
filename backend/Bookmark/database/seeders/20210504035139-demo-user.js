'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [{
      user_nome: 'Marrielly Martines',
      user_email: 'marrielly@alunos.utfpr.edu.br',
      user_senha: '123456789',
      user_nasc: '2021-05-04T14:32:42.000Z',
      createdAt: '2021-05-04T14:32:42.000Z',
      updatedAt: '2021-05-04T14:32:42.000Z'
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
