'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Capitulo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Capitulo.init({
    livro_id: DataTypes.INTEGER,
    cap_num: DataTypes.INTEGER,
    cap_nome: DataTypes.TEXT,
    cap_pag_inicial: DataTypes.INTEGER,
    cap_pag_final: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Capitulo',
  });
  return Capitulo;
};