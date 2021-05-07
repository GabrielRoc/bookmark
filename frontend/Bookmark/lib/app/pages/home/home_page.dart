import 'package:flutter/material.dart';
import 'package:flutter_modular/flutter_modular.dart';

import 'home_controller.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final homeController = Modular.get<HomeController>();

  @override
  Widget build(BuildContext context) {
    //app bar
    final appBar = AppBar(
      elevation: .5,
      title: Text('Livro'),
      actions: <Widget>[
        IconButton(
          icon: Icon(Icons.search),
          onPressed: () {},
        )
      ],
    );

    ///detail of livro image and it's pages
    final topLeft = Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.all(16.0),
          child: Hero(
            tag: homeController.livro.livro_titulo as String,
            child: Material(
              elevation: 15.0,
              shadowColor: Colors.yellow.shade900,
              child: Image(
                image: AssetImage('res/test.jpg'),
                fit: BoxFit.cover,
              ),
            ),
          ),
        ),
        text('${homeController.livro.livro_num_pag} páginas',
            color: Colors.black38, size: 12)
      ],
    );

    ///detail top right
    final topRight = Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        text(homeController.livro.livro_titulo as String,
            size: 16, isBold: true, padding: EdgeInsets.only(top: 16.0)),
        text(
          'de Testerson da Silva',
          color: Colors.black54,
          size: 12,
          padding: EdgeInsets.only(top: 8.0, bottom: 16.0),
        ),
        SizedBox(height: 32.0),
        Material(
          borderRadius: BorderRadius.circular(20.0),
          shadowColor: Colors.blue.shade200,
          elevation: 5.0,
          child: MaterialButton(
            onPressed: () {},
            minWidth: 160.0,
            color: Colors.blue,
            child: text('Marcar Leitura', color: Colors.white, size: 13),
          ),
        )
      ],
    );

    final topContent = Container(
      color: Theme.of(context).primaryColor,
      padding: EdgeInsets.only(bottom: 16.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Flexible(flex: 2, child: topLeft),
          Flexible(flex: 3, child: topRight),
        ],
      ),
    );

    ///scrolling text description
    final bottomContent = Container(
      height: 220.0,
      child: SingleChildScrollView(
        padding: EdgeInsets.all(16.0),
        child: Text(
          homeController.livro.livro_sinopse as String,
          style: TextStyle(fontSize: 13.0, height: 1.5),
        ),
      ),
    );

    return Scaffold(
      appBar: appBar,
      body: Column(
        children: <Widget>[topContent, bottomContent],
      ),
    );
  }

  ///create text widget
  text(String data,
          {Color color = Colors.black87,
          num size = 14,
          EdgeInsetsGeometry padding = EdgeInsets.zero,
          bool isBold = false}) =>
      Padding(
        padding: padding,
        child: Text(
          data,
          style: TextStyle(
              color: color,
              fontSize: size.toDouble(),
              fontWeight: isBold ? FontWeight.bold : FontWeight.normal),
        ),
      );

  /*@override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Home'),
        ),
        body: Observer(builder: (BuildContext context) {
          if (homeController.livros.error != null) {
            return Center(
              child: Text('Erro'),
            );
          } else if (homeController.livros.value == null) {
            return Center(child: CircularProgressIndicator());
          } else {
            var list = homeController.livros.value;

            return ListView.builder(
                itemCount: list!.length,
                itemBuilder: (BuildContext context, int index) {
                  return ListTile(
                    title: Text(list[index].livro_titulo as String),
                  );
                });
          }
        }));
  }*/

}
