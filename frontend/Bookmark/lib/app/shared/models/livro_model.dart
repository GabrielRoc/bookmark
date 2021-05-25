// To parse this JSON data, do
//
//     final livro = livroFromJson(jsonString);

import 'dart:convert';

List<Livro> livroFromJson(String str) =>
    List<Livro>.from(json.decode(str).map((x) => Livro.fromJson(x)));

String livroToJson(List<Livro> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

class Livro {
  Livro({
    required this.id,
    required this.autorId,
    required this.generoId,
    this.livroTitulo,
    this.livroSubtitulo,
    this.livroVolume,
    this.livroNumPag,
    this.livroCapa,
    this.livroEditora,
    this.livroSinopse,
    this.livroAvaliacao,
    this.livroPrevia,
    required this.createdAt,
    required this.updatedAt,
  });

  int id;
  int autorId;
  int generoId;
  dynamic livroTitulo;
  dynamic livroSubtitulo;
  dynamic livroVolume;
  dynamic livroNumPag;
  dynamic livroCapa;
  dynamic livroEditora;
  dynamic livroSinopse;
  dynamic livroAvaliacao;
  dynamic livroPrevia;
  DateTime createdAt;
  DateTime updatedAt;

  factory Livro.fromJson(Map<String, dynamic> json) => Livro(
        id: json["id"],
        autorId: json["autor_id"],
        generoId: json["genero_id"],
        livroTitulo: json["livro_titulo"],
        livroSubtitulo: json["livro_subtitulo"],
        livroVolume: json["livro_volume"],
        livroNumPag: json["livro_num_pag"],
        livroCapa: json["livro_capa"],
        livroEditora: json["livro_editora"],
        livroSinopse: json["livro_sinopse"],
        livroAvaliacao: json["livro_avaliacao"],
        livroPrevia: json["livro_previa"],
        createdAt: DateTime.parse(json["createdAt"]),
        updatedAt: DateTime.parse(json["updatedAt"]),
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "autor_id": autorId,
        "genero_id": generoId,
        "livro_titulo": livroTitulo,
        "livro_subtitulo": livroSubtitulo,
        "livro_volume": livroVolume,
        "livro_num_pag": livroNumPag,
        "livro_capa": livroCapa,
        "livro_editora": livroEditora,
        "livro_sinopse": livroSinopse,
        "livro_avaliacao": livroAvaliacao,
        "livro_previa": livroPrevia,
        "createdAt": createdAt.toIso8601String(),
        "updatedAt": updatedAt.toIso8601String(),
      };
}
