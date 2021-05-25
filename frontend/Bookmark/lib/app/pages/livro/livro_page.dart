import 'package:bookmark/app/shared/models/livro_model.dart';
import 'package:flutter/material.dart';
import 'package:flutter_modular/flutter_modular.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';
import 'package:getwidget/getwidget.dart';
import 'package:percent_indicator/linear_percent_indicator.dart';
import 'package:rflutter_alert/rflutter_alert.dart';

import 'livro_controller.dart';

class LivroPage extends StatefulWidget {
  @override
  _LivroPageState createState() => _LivroPageState();
}

class _LivroPageState extends State<LivroPage> {
  final livroController = Modular.get<LivroController>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: GFAppBar(
        title: Text('Livro'),
        actions: <Widget>[
          GFIconButton(
            icon: Icon(
              Icons.favorite,
              color: Colors.white,
            ),
            onPressed: () {},
            type: GFButtonType.transparent,
          ),
        ],
      ),
      body: FutureBuilder<Livro>(
          future: livroController.livro,
          builder: (context, snapshot) {
            if (!snapshot.hasData)
              return Center(
                child: CircularProgressIndicator(),
              );
            return SingleChildScrollView(
              child: Column(
                children: [
                  Stack(
                    alignment: Alignment.center,
                    children: [
                      Image.asset('res/res.jpg'),
                      Positioned(
                        bottom: 0,
                        child: Container(
                          margin: EdgeInsets.all(20),
                          child: new LinearPercentIndicator(
                            width: MediaQuery.of(context).size.width - 50,
                            animation: true,
                            lineHeight: 20.0,
                            animationDuration: 2000,
                            percent: 0.1,
                            center: Text(
                              'Página 30 de ${snapshot.data!.livroNumPag}',
                              style: TextStyle(fontWeight: FontWeight.w700),
                            ),
                            linearStrokeCap: LinearStrokeCap.roundAll,
                            progressColor: Colors.brown[200],
                            backgroundColor: Colors.brown[100],
                          ),
                        ),
                      ),
                      /* Positioned(
                      top: 15,
                      right: 10,
                      child: ElevatedButton(
                        onPressed: () {},
                        child: Icon(Icons.favorite),
                        style: ElevatedButton.styleFrom(
                          shape: CircleBorder(),
                          padding: EdgeInsets.all(10),
                          primary: Colors.brown[300],
                        ),
                      ),
                    )*/
                    ],
                  ),
                  Container(
                    margin: const EdgeInsets.fromLTRB(30, 30, 30, 20),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Text('Aventura',
                            style: TextStyle(
                                fontSize: 16, fontWeight: FontWeight.w300)),
                        Text(
                          snapshot.data?.livroTitulo,
                          style: TextStyle(
                              fontSize: 30, fontWeight: FontWeight.w500),
                        ),
                        Text('por Joãozinho da Silva',
                            style: TextStyle(
                                fontSize: 12, fontWeight: FontWeight.w300))
                      ],
                    ),
                  ),
                  Container(
                      margin: const EdgeInsets.fromLTRB(30, 0, 30, 0),
                      child: Text(snapshot.data!.livroSinopse)),
                  Column(
                    children: [
                      Container(
                        margin: const EdgeInsets.fromLTRB(30, 20, 30, 0),
                        child: RatingBar.builder(
                          initialRating: 5,
                          minRating: 0,
                          direction: Axis.horizontal,
                          allowHalfRating: false,
                          itemCount: 5,
                          unratedColor: Colors.brown[100],
                          itemPadding: EdgeInsets.symmetric(horizontal: 4.0),
                          itemBuilder: (context, _) => Icon(
                            Icons.star,
                            color: Colors.brown[300],
                          ),
                          onRatingUpdate: (rating) {
                            print(rating);
                          },
                        ),
                      ),
                      Container(
                        margin: const EdgeInsets.fromLTRB(30, 10, 30, 0),
                        child: Text(
                            'Avaliação Geral: ${snapshot.data!.livroAvaliacao}'),
                      )
                    ],
                  ),
                ],
              ),
            );
          }),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Alert(
              context: context,
              title: "Marcar página",
              content: Column(
                children: <Widget>[
                  Container(
                    margin: EdgeInsets.all(10),
                    child: Text(
                      'Página atual: 30 de 40',
                      style: TextStyle(
                        fontSize: 15,
                        fontWeight: FontWeight.w200,
                      ),
                    ),
                  ),
                  TextField(
                    decoration: InputDecoration(
                      icon: Icon(Icons.bookmark_added_outlined),
                      labelText: 'Número da página',
                    ),
                  ),
                ],
              ),
              buttons: [
                DialogButton(
                  onPressed: () => Navigator.pop(context),
                  child: Text(
                    "Adicionar Leitura",
                    style: TextStyle(color: Colors.white, fontSize: 20),
                  ),
                )
              ]).show();
        },
        child: Icon(Icons.add),
      ),
    );
  }
}
