'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kelas.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nama: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    mentor_id: DataTypes.INTEGER,
    level: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kelas',
  });
  return Kelas;
};