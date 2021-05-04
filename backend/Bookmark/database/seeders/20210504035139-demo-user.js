'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [{
      user_nome: 'Marrielly Martines',
      user_email: 'marrielly@alunos.utfpr.edu.br',
      user_senha: '123456789',
      user_nasc: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
