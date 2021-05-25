'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Comentario.init({
    usuario_id: DataTypes.INTEGER,
    livro_id: DataTypes.INTEGER,
    comentario: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comentario',
  });
  return Comentario;
};