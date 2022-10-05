const User = require('./User');
const Genres = require('./Genres');
const Events = require('./Events');
const Tickets = require('./Tickets');

Genres.hasMany(Events, {
  foreignKey: 'genres_id',
});

Events.belongsTo(Genres, {
  foreignKey: 'genres_id',
});

Events.hasMany(Tickets, {
  foreignKey: 'events_id',
});

module.exports = { User, Genres, Events, Tickets };