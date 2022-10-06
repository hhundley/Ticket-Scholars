const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tickets extends Model {}

Tickets.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "events",
        key: "id",
      },

    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },

    }
    
  },


  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'tickets',
  }
);

module.exports = Tickets;
