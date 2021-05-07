import 'package:bookmark/app/shared/models/livro_model.dart';
import 'package:dio/dio.dart';

class LivroRepository {
  final Dio dio;

  LivroRepository(this.dio);

  Future<List<LivroModel>?> get getAllLivros async {
    var result = await dio.get('/livros/');
    List<LivroModel>? list;
    for (var json in (result.data['results']) as List) {
      LivroModel model = LivroModel(livro_titulo: json['livro_titulo']);
      list!.add(model);
    }
    return list;
  }
}
