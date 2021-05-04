const request = require('supertest')
const app = require('../../app')

describe('Get Endpoints', () => {
  it('Buscar todos os livros', async () => {
    const res = await request(app)
      .get('/livros')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual([
        {
            "id": 1,
            "autor_id": 1,
            "genero_id": 1,
            "livro_titulo": "Testando Tudo Mesmo",
            "livro_subtitulo": "Planeta Terra",
            "livro_volume": "I",
            "livro_num_pag": 300,
            "livro_capa": null,
            "livro_editora": "Universo",
            "livro_sinopse": "Todo o planeta terra sendo testado",
            "livro_avaliacao": null,
            "livro_previa": null,
            "createdAt": "2021-05-04T07:07:30.000Z",
            "updatedAt": "2021-05-04T07:07:30.000Z"
        },
        {
            "id": 2,
            "autor_id": 1,
            "genero_id": 1,
            "livro_titulo": "A seleção",
            "livro_subtitulo": "Trinta e cinco garotas e uma coroa",
            "livro_volume": "I",
            "livro_num_pag": 270,
            "livro_capa": null,
            "livro_editora": "Seguinte",
            "livro_sinopse": "Trinta e cinco garotas e uma coroa",
            "livro_avaliacao": null,
            "livro_previa": null,
            "createdAt": "2021-05-04T07:07:30.000Z",
            "updatedAt": "2021-05-04T07:07:30.000Z"
        }
    ]);
  }),
  it('Buscar um livro especifico', async () => {
    const res = await request(app)
      .get('/livros/buscar/1')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual([
        {
            "id": 1,
            "autor_id": 1,
            "genero_id": 1,
            "livro_titulo": "Testando Tudo Mesmo",
            "livro_subtitulo": "Planeta Terra",
            "livro_volume": "I",
            "livro_num_pag": 300,
            "livro_capa": null,
            "livro_editora": "Universo",
            "livro_sinopse": "Todo o planeta terra sendo testado",
            "livro_avaliacao": null,
            "livro_previa": null,
            "createdAt": "2021-05-04T07:07:30.000Z",
            "updatedAt": "2021-05-04T07:07:30.000Z"
        }
    ]);
  })
})