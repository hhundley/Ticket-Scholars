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

    artist: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'events',
        key: 'id',
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      references: {
        model: 'events',
        key: 'id',
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'events',
        key: 'id',
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'events',
        key: 'id',
      }
    },
    events_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'events',
        key: 'id',
      },
    },
    row: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
    section: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
      },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'tickets',
  }
);

module.exports = Tickets;
