'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Autore.init({
    autor_name: DataTypes.TEXT,
    autor_imagem: DataTypes.BLOB,
    autor_biografia: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Autore',
  });
  return Autore;
};