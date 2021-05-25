'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Estante.init({
    usuario_id: DataTypes.INTEGER,
    livro_id: DataTypes.INTEGER,
    est_flag: DataTypes.TEXT,
    est_avaliacao: DataTypes.INTEGER,
    est_fav: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Estante',
  });
  return Estante;
};