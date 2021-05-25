import 'package:bookmark/app/pages/estante/estante_controller.dart';
import 'package:bookmark/app/pages/estante/estante_page.dart';
import 'package:bookmark/app/pages/home/home_controller.dart';
import 'package:bookmark/app/pages/home/home_page.dart';
import 'package:bookmark/app/pages/livro/livro_controller.dart';
import 'package:bookmark/app/pages/livro/livro_page.dart';
import 'package:bookmark/app/shared/repositories/livro_repositories.dart';
import 'package:bookmark/app/shared/utils/constants.dart';
import 'package:dio/dio.dart';
import 'package:flutter_modular/flutter_modular.dart';

import 'app_controller.dart';

class AppModule extends Module {
  @override
  final List<Bind> binds = [
    Bind((i) => AppController()),
    Bind((i) => HomeController()),
    Bind((i) => EstanteController(i.get())),
    Bind((i) => LivroController(i.get())),
    Bind((i) => LivroRepository(i.get())),
    Bind((i) => Dio(BaseOptions(baseUrl: URL_BASE))),
  ];

  @override
  final List<ModularRoute> routes = [
    ChildRoute('/', child: (_, args) => HomePage()),
    ChildRoute('/estante', child: (_, args) => EstantePage()),
    ChildRoute('/livro', child: (_, args) => LivroPage()),
  ];
}
