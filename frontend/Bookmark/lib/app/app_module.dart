import 'package:bookmark/app/pages/home/home_controller.dart';
import 'package:bookmark/app/pages/home/home_page.dart';
import 'package:bookmark/app/shared/repositories/livro_repositories.dart';
import 'package:bookmark/app/shared/utils/constants.dart';
import 'package:dio/dio.dart';
import 'package:flutter_modular/flutter_modular.dart';

import 'app_controller.dart';

class AppModule extends Module {
  @override
  final List<Bind> binds = [
    Bind((i) => AppController()),
    Bind((i) => HomeController(i.get())),
    Bind((i) => LivroRepository(i.get())),
    Bind((i) => Dio(BaseOptions(baseUrl: URL_BASE))),
  ];

  @override
  final List<ModularRoute> routes = [
    ChildRoute('/', child: (_, args) => HomePage()),
  ];
}
