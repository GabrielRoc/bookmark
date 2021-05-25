import 'package:bookmark/app/shared/models/livro_model.dart';
import 'package:bookmark/app/shared/repositories/livro_repositories.dart';
import 'package:mobx/mobx.dart';
part 'estante_controller.g.dart';

class EstanteController = _EstanteControllerBase with _$EstanteController;

abstract class _EstanteControllerBase with Store {
  final LivroRepository livroRepository;

  //late ObservableFuture<List<Livro>> livros;

  _EstanteControllerBase(this.livroRepository) {
    //livros = livroRepository.getAllLivros.asObservable();
  }
}
