import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_modular/flutter_modular.dart';
import 'package:getwidget/getwidget.dart';
import 'estante_controller.dart';

class EstantePage extends StatefulWidget {
  @override
  _EstantePageState createState() => _EstantePageState();
}

class _EstantePageState extends State<EstantePage> {
  final estanteController = Modular.get<EstanteController>();

  @override
  Widget build(BuildContext context) {
    var columnCount = 2;

    //print('${estanteController.livros.value.toString()}');

    return AutoRefresh(
      duration: const Duration(milliseconds: 2000),
      child: Scaffold(
        appBar: GFAppBar(
          title: Text('Estante'),
          searchBar: true,
          searchController: null,
        ),
        body: GridView.count(
          primary: false,
          childAspectRatio: 7 / 10,
          padding: const EdgeInsets.all(8.0),
          crossAxisCount: columnCount,
          scrollDirection: Axis.vertical,
          shrinkWrap: true,
          children: List.generate(
            10,
            (int index) {
              return LivroCard();
            },
          ),
        ),
      ),
    );
  }
}

class LivroCard extends StatelessWidget {
  const LivroCard({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => Modular.to.pushNamed('/livro'),
      child: Card(
        semanticContainer: true,
        clipBehavior: Clip.antiAliasWithSaveLayer,
        child: Image.asset(
          'res/capa.jpg',
          fit: BoxFit.cover,
        ),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(10.0),
        ),
        elevation: 5,
        margin: EdgeInsets.all(10),
      ),
    );
  }
}

class AutoRefresh extends StatefulWidget {
  final Duration duration;
  final Widget child;

  AutoRefresh({
    Key? key,
    required this.duration,
    required this.child,
  }) : super(key: key);

  @override
  _AutoRefreshState createState() => _AutoRefreshState();
}

class _AutoRefreshState extends State<AutoRefresh> {
  int? keyValue;
  ValueKey? key;

  Timer? _timer;

  @override
  void initState() {
    super.initState();

    keyValue = 0;
    key = ValueKey(keyValue);

    _recursiveBuild();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      key: key,
      child: widget.child,
    );
  }

  void _recursiveBuild() {
    _timer = Timer(
      widget.duration,
      () {
        setState(() {
          keyValue = keyValue! + 1;
          key = ValueKey(keyValue);
          _recursiveBuild();
        });
      },
    );
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }
}
