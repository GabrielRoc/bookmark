// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'livro_controller.dart';

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_brace_in_string_interps, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic

mixin _$LivroController on _LivroControllerBase, Store {
  final _$livrosAtom = Atom(name: '_LivroControllerBase.livros');

  @override
  ObservableFuture<List<Livro>> get livros {
    _$livrosAtom.reportRead();
    return super.livros;
  }

  @override
  set livros(ObservableFuture<List<Livro>> value) {
    _$livrosAtom.reportWrite(value, super.livros, () {
      super.livros = value;
    });
  }

  @override
  String toString() {
    return '''
livros: ${livros}
    ''';
  }
}
