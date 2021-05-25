'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuario.init({
    user_nome: DataTypes.TEXT,
    user_email: DataTypes.TEXT,
    user_senha: DataTypes.TEXT,
    user_nasc: DataTypes.DATE,
    user_imagem: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};