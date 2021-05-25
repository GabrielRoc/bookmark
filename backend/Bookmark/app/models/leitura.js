'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Leitura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Leitura.init({
    estante_id: DataTypes.INTEGER,
    leitura_pag: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Leitura',
  });
  return Leitura;
};