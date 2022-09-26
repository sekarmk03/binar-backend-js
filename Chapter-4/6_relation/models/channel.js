'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // belongsTo
      Channel.belongsTo(models.User, {
        foreignKey: 'user_id', as: 'user'
      });

      Channel.hasMany(models.Video, {
        foreignKey: 'channel_id', as: 'videos'
      });

      Channel.belongsToMany(models.User, {
        through: models.Subscription,
        foreignKey: 'channel_id',
        as: 'subscribers'
      });
    }
  }
  Channel.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Channel',
  });
  return Channel;
};