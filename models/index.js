const User = require('./User');
const Genres = require('./Genres');
const Events = require('./Events');

Genres.hasMany(Events, {
  foreignKey: 'genres_id',
});

Events.belongsTo(Genres, {
  foreignKey: 'genres_id',
});

module.exports = { User, Genres, Events };