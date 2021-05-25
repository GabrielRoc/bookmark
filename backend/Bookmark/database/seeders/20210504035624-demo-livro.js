'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Livros', [
      {
        autor_id: '1',
        genero_id: '1',
        livro_titulo: 'Testando Tudo Mesmo',
        livro_subtitulo: 'Planeta Terra',
        livro_volume: 'I',
        livro_num_pag: '300',
        livro_editora: 'Universo',
        livro_sinopse: 'Todo o planeta terra sendo testado',
        createdAt: '2021-05-04T14:32:42.000Z',
        updatedAt: '2021-05-04T14:32:42.000Z'
      },
      {
        autor_id: '1',
        genero_id: '1',
        livro_titulo: 'A seleção',
        livro_subtitulo: 'Trinta e cinco garotas e uma coroa',
        livro_volume: 'I',
        livro_num_pag: '270',
        livro_editora: 'Seguinte',
        livro_sinopse: 'Trinta e cinco garotas e uma coroa',
        createdAt: '2021-05-04T14:32:42.000Z',
        updatedAt: '2021-05-04T14:32:42.000Z'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Livros', null, {});
  }
};

