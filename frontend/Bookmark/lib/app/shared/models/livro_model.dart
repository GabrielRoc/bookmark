import 'dart:html';

class LivroModel {
  int? autor_id;
  int? genero_id;
  String? livro_titulo;
  String? livro_subtitulo;
  String? livro_volume;
  int? livro_num_pag;
  Blob? livro_capa;
  String? livro_editora;
  String? livro_sinopse;
  int? livro_avaliacao;
  Blob? livro_previa;

  LivroModel(
      {this.livro_titulo,
      this.livro_subtitulo,
      this.livro_volume,
      this.livro_num_pag,
      this.livro_capa,
      this.livro_editora,
      this.livro_sinopse,
      this.livro_avaliacao,
      this.livro_previa,
      this.autor_id,
      this.genero_id});
}
