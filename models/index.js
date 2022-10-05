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

Tickets.belongsTo(Events, {
  foreignKey: 'event_id',
});

Tickets.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Tickets,{
  foreignKey: 'user_id',
})

Events.hasMany(Tickets,{
  foreignKey: 'event_id',
})

module.exports = { User, Genres, Events, Tickets };