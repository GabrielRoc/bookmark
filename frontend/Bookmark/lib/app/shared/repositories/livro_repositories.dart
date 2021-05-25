import 'package:bookmark/app/shared/models/livro_model.dart';
import 'package:dio/dio.dart';

class LivroRepository {
  final Dio dio;

  LivroRepository(this.dio);

  Future<List<Livro>> getAllLivros() async {
    try {
      Response response = await dio.get("/livros");
      return (response.data as List).map((x) => Livro.fromJson(x)).toList();
    } catch (error, stacktrace) {
      throw Exception("Exception occured: $error stackTrace: $stacktrace");
    }
  }

  Future<Livro> getLivroById(int id) async {
    try {
      Response response = await dio.get("/livros/buscar/${id}");
      return Livro.fromJson((response.data)[0]);
    } catch (error, stacktrace) {
      throw Exception("Exception occured: $error stackTrace: $stacktrace");
    }
  }
}
