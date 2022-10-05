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
        "description": "Ticket to Rolling Down a Hill Tour",
        "total_tickets": '45',
        "website_link" : "../../public/images/image1.jpg"
    },

    {
        "title": "Flapjacks for Dinner World Tour",
        "artist": "Bacon Pancakes",
        "show_date": "2022-10-02",
        "show_time": "8:00PM",
        "description": "Ticket to Flapjacks for Dinner World Tour",
        "total_tickets": '49',
        "website_link" : "../../public/images/image2.jpg"
    },

    {
        "title": "Summer of 0ur Lyfes Tour",
        "artist": "BRRRRRR",
        "show_date": "2022-10-03",
        "show_time": "6:00PM",
        "description": "Tickets for the Summer of 0ur Lyfes Tour",
        "total_tickets": '151',
        "website_link" : "../../public/images/image3.jpg"
    },

    {
        "title": "Jazz Hands and Snaps Mean Everything Tour",
        "artist": "sad court jester",
        "show_date": "2022-10-04",
        "show_time": "7:00PM",
        "description": "ticket to Jazz Hands Tour",
        "total_tickets": '78',
        "website_link" : "../../public/images/image4.jpg"
    },

    {
        "title": "Touring at Its Best Tour",
        "artist": "Da-tours",
        "show_date": "2022-10-05",
        "show_time": "6:00PM",
        "description": "ticket to the touring tour",
        "total_tickets": '54',
        "website_link" : "../../public/images/image5.jpg"
    },

    {
        "title": "Dreams Tour",
        "artist": "Pray",
        "show_date": "2022-10-09",
        "show_time": "8:00PM",
        "description": "ticket to the dream tour",
        "total_tickets": '88',
        "website_link" : "../../public/images/image6.jpg"
    },

    {
        "title": "Seeing Sounds Tour",
        "artist": "Smores",
        "show_date": "2022-10-11",
        "show_time": "7:00PM",
        "description": "ticket to the seeing sounds tour",
        "total_tickets": '99',
        "website_link" : "../../public/images/image7.jpg"
    },

    {
        "title": "Dont Tell Ma Tour",
        "artist": "Dads on Strike",
        "show_date": "2022-10-11",
        "show_time": "6:00PM",
        "description": "ticket to the Dont Tell Ma tour",
        "total_tickets": '223',
        "website_link" : "../../public/images/image8.jpg"
    },

    {
        "title": "i wanna be someone Tour",
        "artist": "Nobody",
        "show_date": "2022-10-25",
        "show_time": "7:00PM",
        "description": "ticket to the i wanna be someone tour",
        "total_tickets": '164',
        "website_link" : "../../public/images/image9.jpg"
    },

    {
        "title": "Bring back the Snack Wrap Tour",
        "artist": "Mc-lifer",
        "show_date": "2022-10-05",
        "show_time": "6:00PM",
        "description": "ticket to the Snack Wrap tour",
        "total_tickets": '745',
        "website_link" : "../../public/images/image10.jpg"
    },

    {
        "title": "You are at your best when you're crying World Tour",
        "artist": "Grumpy Cat Lives",
        "show_date": "2022-10-23",
        "show_time": "7:00PM",
        "description": "ticket to the crying world tour",
        "total_tickets": '888',
        "website_link" : "../../public/images/pop-image1.jpg"
    },

    {
        "title": "Orges are like Onions, ode to Shrek Tour",
        "artist": "Swamps Stars",
        "show_date": "2022-10-19",
        "show_time": "8:00PM",
        "description": "ticket to the Onion tour",
        "total_tickets": '8',
        "website_link" : "../../public/images/pop-image2.jpg"
    },

    {
        "title": "NOW THATS WHAT I CALL MUSIC 483 LIVE",
        "artist": "Untitled Artists",
        "show_date": "2022-10-20",
        "show_time": "6:00PM",
        "description": "ticket to the NOW tour",
        "total_tickets": '454',
        "website_link" : "../../public/images/pop-image3.jpg"
    },

    {
        "title": "Christmas Came Early Tour",
        "artist": "Sir Kringle",
        "show_date": "2022-10-25",
        "show_time": "7:00PM",
        "description": "ticket to the Christmas Early tour",
        "total_tickets": '325',
        "website_link" : "../../public/images/pop-image4.jpg"
    },

    {
        "title": "Coding Makes The World Go Round",
        "artist": "CodeG",
        "show_date": "2022-11-13",
        "show_time": "6:00PM",
        "description": "ticket to the Coding  tour",
        "total_tickets": '1337',
        "website_link" : "../../public/images/pop-image4.jpg"
    },

    {
        "title": "Why is Bologna spelled Bologna",
        "artist": "Deli Cut Cutters",
        "show_date": "2022-12-13",
        "show_time": "7:00PM",
        "description": "ticket to the Deli tour",
        "total_tickets": '411',
        "website_link" : "../../public/images/pop-image5.jpg"
    },

    {
        "title": "Duolingo speak easy tour",
        "artist": "big green bird",
        "show_date": "2023-1-25",
        "show_time": "8:00PM",
        "description": "ticket to the duolingo tour",
        "total_tickets": '355525',
        "website_link" : "../../public/images/pop-image6.jpg"
    },

    {
        "title": "Coffee with You tour",
        "artist": "Mr.Coffee",
        "show_date": "2023-1-20",
        "show_time": "7:00PM",
        "description": "ticket to the Coffee tour",
        "total_tickets": '505',
        "website_link" : "../../public/images/pop-image7.jpg"
    },

    {
        "title": "Fried Sushi is Better World Tour",
        "artist": "Sumo boys",
        "show_date": "2023-03-14",
        "show_time": "8:00PM",
        "description": "ticket to the Fried Sushi tour",
        "total_tickets": '745',
        "website_link" : "../../public/images/pop-image8.jpg"
    },

    {
        "title": "Dont Get Mad, Get Glad Tour",
        "artist": "Betty Crocker",
        "show_date": "2023-04-01",
        "show_time": "7:00PM",
        "description": "ticket to the Get Glad tour",
        "total_tickets": '161',
        "website_link" : "../../public/images/pop-image9.jpg"
    },

    {
        "title": "Wish you were here tour",
        "artist": "Randoms in Chat",
        "show_date": "2023-05-04",
        "show_time": "6:00PM",
        "description": "ticket to the wish you were here tour",
        "total_tickets": '325',
        "website_link" : "../../public/images/pop-image10.jpg"
    },

    {
        "title": "Tell me why tour",
        "artist": "Never",
        "show_date": "2022-11-25",
        "show_time": "7:30PM",
        "description": "ticket to tell me why tour",
        "total_tickets": '325',
        "website_link" : "../../public/images/rock-image1.jpg"
    },

    {
        "title": "Aint nothing but a Heartache tour",
        "artist": "Give You Up",
        "show_date": "2022-11-26",
        "show_time": "7:31PM",
        "description": "ticket to aint nothing but a heartache tour",
        "total_tickets": '325',
        "website_link" : "../../public/images/rock-image2.jpg"
    },

    {
        "title": "1000 miles is a lot to walk tour",
        "artist": "Piano Player with alot of Time",
        "show_date": "2022-12-01",
        "show_time": "7:45PM",
        "description": "ticket to 1000 miles",
        "total_tickets": '625',
        "website_link" : "../../public/images/rock-image3.jpg"
    },

    {
        "title": "Biscuits and Gravy",
        "artist": "Sizzling Griddle",
        "show_date": "2022-11-27",
        "show_time": "7:30PM",
        "description": "ticket to Biscuits and Gravy tour",
        "total_tickets": '425',
        "website_link" : "../../public/images/rock-image4.jpg"
    },

    {
        "title": "Really Running Out of Ideas",
        "artist": "Insert Band Name Here",
        "show_date": "2023-11-27",
        "show_time": "6:30PM",
        "description": "ticket to Running out of ideas tour",
        "total_tickets": '10',
        "website_link" : "../../public/images/rock-image5.jpg"
    },

    {
        "title": "Beach Party Vibing Tour",
        "artist": "Beaching Good Time",
        "show_date": "2022-04-17",
        "show_time": "8:30PM",
        "description": "ticket to Beach Party tour",
        "total_tickets": '550',
        "website_link" : "../../public/images/rock-image6.jpg"
    },

    {
        "title": "Green Pasters are where you water tour",
        "artist": "Water Can Sunday",
        "show_date": "2023-5-27",
        "show_time": "7:30PM",
        "description": "ticket to green pasters tour",
        "total_tickets": '85',
        "website_link" : "../../public/images/rock-image7.jpg"
    },

    {
        "title": "Mulching is really a bad time world tour",
        "artist": "GreenThumb",
        "show_date": "2023-3-27",
        "show_time": "8:30PM",
        "description": "ticket to Mulching tour",
        "total_tickets": '825',
        "website_link" : "../../public/images/rock-image8.jpg"
    },

    {
        "title": "Do a Kickflip Tour",
        "artist": "Skateboard Pete",
        "show_date": "2023-04-27",
        "show_time": "6:45PM",
        "description": "ticket to do a kickflip tour",
        "total_tickets": '425',
        "website_link" : "../../public/images/rock-image9.jpg"
    },

    {
        "title": "Total MayHam World Tour",
        "artist": "Peppa the Teenage Pig",
        "show_date": "2023-1-27",
        "show_time": "7:20PM",
        "description": "ticket to MAYHAM tour",
        "total_tickets": '425',
        "website_link" : "../../public/images/rock-image10.jpg"
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


