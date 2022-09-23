'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Video.belongsTo(models.Channel, {
        foreignKey: 'channel_id', as: 'channel'
      })
    }
  }
  Video.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    channel_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Video',
  });
  return Video;
};