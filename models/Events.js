const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Events extends Model {}

Events.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    show_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    show_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genres_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'genres',
        key: 'id',
      },
    },
    total_tickets:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    website_link:{
      type: DataTypes.STRING,
      allowNull: false,
    }
   
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'events',
  }
);

module.exports = Events;
