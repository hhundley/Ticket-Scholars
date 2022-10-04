// seeding the db

const { application } = require('express')
const sequelize = require('../config/connection')
const db = require('../config/connection')
const events = require('../models/Events')
const genre = require('../models/Genres')


const eventsForTicketScholars = [
    {
        "title": "Rolling Down A Hill Tour",
        "artist": "Lumberjack Loggers",
        "show_date": "2022-10-01",
        "show_time": "7:00PM",
        "description": "Ticket to Rolling Down a Hill Tour"
    },

    {
        "title": "Flapjacks for Dinner World Tour",
        "artist": "Bacon Pancakes",
        "show_date": "2022-10-02",
        "show_time": "8:00PM",
        "description": "Ticket to Flapjacks for Dinner World Tour"
    },

    {
        "title": "Summer of 0ur Lyfes Tour",
        "artist": "BRRRRRR",
        "show_date": "2022-10-03",
        "show_time": "6:00PM",
        "description": "Tickets for the Summer of 0ur Lyfes Tour"
    },

    {
        "title": "Jazz Hands and Snaps Mean Everything Tour",
        "artist": "sad court jester",
        "show_date": "2022-10-04",
        "show_time": "7:00PM",
        "description": "ticket to Jazz Hands Tour"
    },

    {
        "title": "Touring at Its Best Tour",
        "artist": "Da-tours",
        "show_date": "2022-10-05",
        "show_time": "6:00PM",
        "description": "ticket to the touring tour"
    },

    {
        "title": "Dreams Tour",
        "artist": "Pray",
        "show_date": "2022-10-09",
        "show_time": "8:00PM",
        "description": "ticket to the dream tour"
    },

    {
        "title": "Seeing Sounds Tour",
        "artist": "Smores",
        "show_date": "2022-10-11",
        "show_time": "7:00PM",
        "description": "ticket to the seeing sounds tour"
    },

    {
        "title": "Dont Tell Ma Tour",
        "artist": "Dads on Strike",
        "show_date": "2022-10-11",
        "show_time": "6:00PM",
        "description": "ticket to the Dont Tell Ma tour"
    },

    {
        "title": "i wanna be someone Tour",
        "artist": "Nobody",
        "show_date": "2022-10-25",
        "show_time": "7:00PM",
        "description": "ticket to the i wanna be someone tour"
    },

    {
        "title": "Bring back the Snack Wrap Tour",
        "artist": "Mc-lifer",
        "show_date": "2022-10-05",
        "show_time": "6:00PM",
        "description": "ticket to the Snack Wrap tour"
    },

    {
        "title": "You at your best when you're crying World Tour",
        "artist": "Grumpy Cat Lives",
        "show_date": "2022-10-23",
        "show_time": "7:00PM",
        "description": "ticket to the crying world tour"
    },

    {
        "title": "Orges are like Onions , ode to Shrek Tour",
        "artist": "Swamps Stars",
        "show_date": "2022-10-19",
        "show_time": "8:00PM",
        "description": "ticket to the Onion tour"
    },

    {
        "title": "NOW THATS WHAT I CALL MUSIC 483 LIVE",
        "artist": "Untitled Artists",
        "show_date": "2022-10-20",
        "show_time": "6:00PM",
        "description": "ticket to the touring tour"
    },

    {
        "title": "Christmas Came Early Tour",
        "artist": "Sir Kringle",
        "show_date": "2022-10-25",
        "show_time": "7:00PM",
        "description": "ticket to the Christmas Early tour"
    }
]


const genreForTicketScholars = [
    {
        "genre" : "rock",
        "starting_date": "2022-10-01"
    },

    {
        "genre" : "bluegrass",
        "starting_date": "2022-10-02"
    },

    {
        "genre" : "pop",
        "starting_date": "2022-10-03"
    },

    {
        "genre" : "edm",
        "starting_date": "2022-10-04"
    },

    {
        "genre" : "country",
        "starting_date": "2022-10-01"
    }



]

const seed = async () => {
    await sequelize.sync({force: true});

    await events.bulkCreate(eventsForTicketScholars);
    await genre.bulkCreate(genreForTicketScholars);

    process.exit(0);
}

seed();


