import 'package:bookmark/app/shared/models/livro_model.dart';
import 'package:bookmark/app/shared/repositories/livro_repositories.dart';
import 'package:mobx/mobx.dart';
part 'home_controller.g.dart';

class HomeController = _HomeControllerBase with _$HomeController;

abstract class _HomeControllerBase with Store {
  final LivroRepository livroRepository;

  @observable
  late ObservableFuture<List<LivroModel>?> livros;

  final LivroModel livro = LivroModel(
      livro_titulo: 'Teste',
      livro_subtitulo: '01',
      livro_volume: 'I',
      livro_sinopse: 'Bla bla bla',
      livro_editora: 'Aquela',
      livro_avaliacao: 4,
      livro_num_pag: 300);

  _HomeControllerBase(this.livroRepository) {
    livros = livroRepository.getAllLivros.asObservable();
  }
}
