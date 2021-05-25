import 'package:bookmark/app/shared/models/livro_model.dart';
import 'package:bookmark/app/shared/repositories/livro_repositories.dart';
import 'package:mobx/mobx.dart';
part 'livro_controller.g.dart';

class LivroController = _LivroControllerBase with _$LivroController;

abstract class _LivroControllerBase with Store {
  final LivroRepository livroRepository;

  @observable
  late ObservableFuture<List<Livro>> livros;

  late Future<Livro> livro;

  /*final Livro livro = new Livro(
      livro_titulo: 'Teste',
      livro_subtitulo: '01',
      livro_volume: 'I',
      livro_sinopse:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae eleifend justo. Vestibulum enim est, maximus a placerat quis, efficitur non purus. Sed hendrerit sem ac tellus ultrices, ut fringilla nulla sodales. Curabitur consectetur risus eu ligula vestibulum, vel ullamcorper sapien ultricies. Morbi ac est eget arcu tristique egestas vel vel diam. Nulla in condimentum massa. Nulla rhoncus aliquam lacus a fermentum. Etiam consectetur ipsum ac lectus pharetra molestie. Etiam at justo nunc. Vestibulum eu risus a enim ultrices malesuada et nec neque. Integer a felis rhoncus, blandit nisi eu, posuere sem. Phasellus fringilla libero lacus. Quisque lacinia elit at dui porttitor dictum.',
      livro_editora: 'Aquela',
      livro_avaliacao: 4,
      livro_num_pag: 300);*/

  _LivroControllerBase(this.livroRepository) {
    //livros = livroRepository.getAllLivros.asObservable();
    livro = livroRepository.getLivroById(1);
  }
}
