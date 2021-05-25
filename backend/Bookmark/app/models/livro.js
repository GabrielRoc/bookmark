'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Livro.init({
    autor_id: DataTypes.INTEGER,
    genero_id: DataTypes.INTEGER,
    livro_titulo: DataTypes.TEXT,
    livro_subtitulo: DataTypes.TEXT,
    livro_volume: DataTypes.TEXT,
    livro_num_pag: DataTypes.INTEGER,
    livro_capa: DataTypes.BLOB,
    livro_editora: DataTypes.TEXT,
    livro_sinopse: DataTypes.TEXT,
    livro_avaliacao: DataTypes.INTEGER,
    livro_previa: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Livro',
  });
  return Livro;
};