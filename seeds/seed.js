// seeding the db

const { application } = require('express')
const sequelize = require('../config/connection')
const db = require('../config/connection')
const {User} = require('../models')
const Events = require('../models/Events')
const Genres = require('../models/Genres')


const eventsForTicketScholars = [
    {
        title: "Rolling Down A Hill Tour",
        artist: "Lumberjack Loggers",
        show_date: "2022-10-01",
        show_time: "7:00PM",
        location: "The Moody Theatre",
        city : "Austin",
        description: "Now for the 25 year in a row, the Lumberjack Loggers are Live again here in Austin, TX.",
        total_tickets: '45',
        website_link : "../public/images/image1.jpg",
        genres_id: 4
    },

    {
        title: "Flapjacks for Dinner World Tour",
        artist: "Bacon Pancakes",
        show_date: "2022-10-02",
        show_time: "8:00PM",
        location: "Granada Center",
        city : "Dallas",
        description: "Bacon Pancakes debut into the Music Scene starts in Dallas, TX",
        total_tickets: '49',
        website_link : "../public/images/image2.jpg",
        genres_id: 3
    },

    {
        title: "Summer of 0ur Lyfes Tour",
        artist: "BRRRRRR",
        show_date: "2022-10-03",
        show_time: "6:00PM",
        location: "Riley's Tavern",
        city : "New Braunfels",
        description: "BRRRR be BRRRING in New BRRRRRaunfels",
        total_tickets: '151',
        website_link : "../public/images/image3.jpg",
        genres_id: 2
    },

    {
        title: "Jazz Hands and Snaps Mean Everything Tour",
        artist: "sad court jester",
        show_date: "2022-10-04",
        show_time: "7:00PM",
        location: "Fitzgerald's Bar",
        city : "San Antonio",
        description: "Fitzgerald's favorite jester is back in SA",
        total_tickets: '78',
        website_link : "../public/images/image4.jpg",
        genres_id: 1
    },

    {
        title: "Touring at Its Best Tour",
        artist: "Da-tours",
        show_date: "2022-10-05",
        show_time: "6:00PM",
        location: "Concrete Street Theatre",
        city : "Corpus Christi",
        description: "Rain or Shine, Da-tours are coming live in Corpus",
        total_tickets: '54',
        website_link : "../public/images/image5.jpg",
        genres_id: 2
    },

    {
        title: "Dreams Tour",
        artist: "Pray",
        show_date: "2022-10-09",
        show_time: "8:00PM",
        location: "Iron Horse Pub",
        city : "Wichita Falls",
        description: "Come see what no one is talking about",
        total_tickets: '88',
        website_link : "../public/images/image6.jpg",
        genres_id: 1
    },

    {
        title: "Seeing Sounds Tour",
        artist: "Smores",
        show_date: "2022-10-11",
        show_time: "7:00PM",
        location: "The Sugar Shack",
        city : "Fulton",
        description: "Smores and the Sugar Shack is a artist venue match made in heaven",
        total_tickets: '99',
        website_link : "../public/images/image7.jpg",
        genres_id: 1
    },

    {
        title: "Dont Tell Ma Tour",
        artist: "Dads on Strike",
        show_date: "2022-10-11",
        show_time: "6:00PM",
        location: "Emos",
        city : "Austin",
        description: "Bunch of dads trying to get out of dish duty",
        total_tickets: '223',
        website_link : "../public/images/image8.jpg",
        genres_id: 5
    },

    {
        title: "i wanna be someone Tour",
        artist: "Nobody",
        show_date: "2022-10-25",
        show_time: "7:00PM",
        location: "The White Horse",
        city : "Austin",
        description: "Nobody rocks with a sound that you probably never heard of",
        total_tickets: '164',
        website_link : "../public/images/image9.jpg",
        genres_id: 4
    },

    {
        title: "Bring back the Snack Wrap Tour",
        artist: "Mc-lifer",
        show_date: "2022-10-05",
        show_time: "6:00PM",
        location: "Stubbs BBQ",
        city : "Austin",
        description: "If doja cat can bring back the mexican pizza, we can bring back the snack wrap",
        total_tickets: '745',
        website_link : "../public/images/image10.jpg",
        genres_id: 3
    },

    {
        title: "You are at your best when you're crying World Tour",
        artist: "Grumpy Cat Lives",
        show_date: "2022-10-23",
        show_time: "7:00PM",
        location: "The Greene Hall",
        city : "Greene",
        description: "Bring the wine, and we will bring the tears",
        total_tickets: '888',
        website_link : "../public/images/pop-image1.jpg",
        genres_id: 3
    },

    {
        title: "Orges are like Onions, ode to Shrek Tour",
        artist: "Swamps Stars",
        show_date: "2022-10-19",
        show_time: "8:00PM",
        location: "Whitewater Amphitheater",
        city : "New Braunfels",
        description: "mud fest for Shrek fans",
        total_tickets: '8',
        website_link : "../public/images/pop-image2.jpg",
        genres_id: 3
    },

    {
        title: "NOW THATS WHAT I CALL MUSIC 483 LIVE",
        artist: "Untitled Artists",
        show_date: "2022-10-20",
        show_time: "6:00PM",
        location: "Empire Control Room",
        city : "Austin",
        description: "Cover artists trying to cover an album we didnt ask for",
        total_tickets: '454',
        website_link : "../public/images/pop-image3.jpg",
        genres_id: 4
    },

    {
        title: "Christmas Came Early Tour",
        artist: "Sir Kringle",
        show_date: "2022-10-25",
        show_time: "7:00PM",
        location: "Moody Center",
        city : "Austin",
        description: "Christmas came really early, like before Halloween",
        total_tickets: '325',
        website_link : "../public/images/pop-image4.jpg",
        genres_id: 4
    },

    {
        title: "Coding Makes The World Go Round",
        artist: "CodeG",
        show_date: "2022-11-13",
        show_time: "6:00PM",
        location: "HEB Center",
        city : "Cedar Park",
        description: "Its really just a bunch of 0s and 1s if you think about it",
        total_tickets: '1337',
        website_link : "../public/images/pop-image4.jpg",
        genres_id: 4
    },

    {
        title: "Why is Bologna spelled Bologna",
        artist: "Deli Cut Cutters",
        show_date: "2022-12-13",
        show_time: "7:00PM",
        location: "Jimmy Johns on West 6th",
        city : "Austin",
        description: "If you dont get a turkey club with bacon your wrong. Plus live music",
        total_tickets: '411',
        website_link : "../public/images/pop-image5.jpg",
        genres_id: 5
    },

    {
        title: "Duolingo speak easy tour",
        artist: "big green bird",
        show_date: "2023-1-25",
        show_time: "8:00PM",
        location: "W",
        city : "Austin",
        description: "Hoping Dua Lipa shows up, not doing this event for any other reason",
        total_tickets: '355525',
        website_link : "../public/images/pop-image6.jpg",
        genres_id: 4
    },

    {
        title: "Coffee with You tour",
        artist: "Mr.Coffee",
        show_date: "2023-1-20",
        show_time: "7:00PM",
        location: "Q2 Stadium",
        city : "Austin",
        description: "No, there will not be alcohol only coffee",
        total_tickets: '505',
        website_link : "../public/images/pop-image7.jpg",
        genres_id: 1
    },

    {
        title: "Fried Sushi is Better World Tour",
        artist: "Sumo boys",
        show_date: "2023-03-14",
        show_time: "8:00PM",
        location: "Kura Revolving Sushi ",
        city : "Austin",
        description: "Sumo boy holding it down at Kura. Half price rolls during the concert only",
        total_tickets: '745',
        website_link : "../public/images/pop-image8.jpg",
        genres_id: 1
    },

    {
        title: "Dont Get Mad, Get Glad Tour",
        artist: "Betty Crocker",
        show_date: "2023-04-01",
        show_time: "7:00PM",
        location: "Stubbs BBQ",
        city : "Austin",
        description: "Please dont bring trash bags, Stubbs will have enough of those on hand",
        total_tickets: '161',
        website_link : "../public/images/pop-image9.jpg",
        genres_id: 1
    },

    {
        title: "Wish you were here tour",
        artist: "Randoms in Chat",
        show_date: "2023-05-04",
        show_time: "6:00PM",
        location: "Bach Theatre",
        city : "Austin",
        description: "Awkward synth noises to be expected",
        total_tickets: '325',
        website_link : "../public/images/pop-image10.jpg",
        genres_id: 1
    },

    {
        title: "Tell me why tour",
        artist: "Never",
        show_date: "2022-11-25",
        show_time: "7:30PM",
        location: "Moody Center",
        city : "Austin",
        description: "Throw back to the 90s",
        total_tickets: '325',
        website_link : "../public/images/rock-image1.jpg",
        genres_id: 1
    },

    {
        title: "Aint nothing but a Heartache tour",
        artist: "Give You Up",
        show_date: "2022-11-26",
        show_time: "7:31PM",
        location: "Moody Center",
        city : "Austin",
        description: "See what I did there?",
        total_tickets: '325',
        website_link : "../public/images/rock-image2.jpg",
        genres_id: 1
    },

    {
        title: "1000 miles is a lot to walk tour",
        artist: "Piano Player with alot of Time",
        show_date: "2022-12-01",
        show_time: "7:45PM",
        location: "Pete's Dualing Piano Bar",
        city : "Austin",
        description: "Vanessa is going to sue us, please buy tickets",
        total_tickets: '625',
        website_link : "../public/images/rock-image3.jpg",
        genres_id: 4
    },

    {
        title: "Biscuits and Gravy",
        artist: "Sizzling Griddle",
        show_date: "2022-11-27",
        show_time: "7:30PM",
        location: "The Waffle House on 290",
        city : "Austin",
        description: "Hashbrowns smothered and covered please",
        total_tickets: '425',
        website_link : "../public/images/rock-image4.jpg",
        genres_id: 4
    },

    {
        title: "Really Running Out of Ideas",
        artist: "Insert Band Name Here",
        show_date: "2023-11-27",
        show_time: "6:30PM",
        location: "Random Intersection on 35",
        city : "Austin",
        description: "Standing room only and only while the light is green",
        total_tickets: '10',
        website_link : "../public/images/rock-image5.jpg",
        genres_id: 2
    },

    {
        title: "Beach Party Vibing Tour",
        artist: "Beaching Good Time",
        show_date: "2022-04-17",
        show_time: "8:30PM",
        location: "Whitewater Amphitheater",
        city : "New Braunfels",
        description: "Float the river and enjoy the tunes",
        total_tickets: '550',
        website_link : "../public/images/rock-image6.jpg",
        genres_id: 1
    },

    {
        title: "Green Pasters are where you water tour",
        artist: "Water Can Sunday",
        show_date: "2023-5-27",
        show_time: "7:30PM",
        location: "The Greene Hall",
        city : "Greene",
        description: "Enjoy the spring with Water Can Sunday",
        total_tickets: '85',
        website_link : "../public/images/rock-image7.jpg",
        genres_id: 4
    },

    {
        title: "Mulching is really a bad time world tour",
        artist: "GreenThumb",
        show_date: "2023-3-27",
        show_time: "8:30PM",
        location: "Q2",
        city : "Austin",
        description: "Mulching will already be done by the time the concert starts",
        total_tickets: '825',
        website_link : "../public/images/rock-image8.jpg",
        genres_id: 5
    },

    {
        title: "Do a Kickflip Tour",
        artist: "Skateboard Pete",
        show_date: "2023-04-27",
        show_time: "6:45PM",
        location: "Skatepark on Bagdad",
        city : "Leander",
        description: "Kickflips will be happening",
        total_tickets: '425',
        website_link : "../public/images/rock-image9.jpg",
        genres_id: 5
    },

    {
        title: "Total MayHam World Tour",
        artist: "Peppa the Teenage Pig",
        show_date: "2023-1-27",
        show_time: "7:20PM",
        location: "Stubbs BBQ",
        city : "Austin",
        description: "LOL",
        total_tickets: '425',
        website_link : "../public/images/rock-image10.jpg",
        genres_id: 5
    }


]


const genreForTicketScholars = [
    {
        genre : "rock",
        starting_date: "2022-10-01"
    },

    {
        genre : "bluegrass",
        starting_date: "2022-10-02"
    },

    {
        genre : "pop",
        starting_date: "2022-10-03"
    },

    {
        genre : "edm",
        starting_date: "2022-10-04"
    },

    {
        genre : "country",
        starting_date: "2022-10-01"
    }



]

const seedUsers = [
    {
        first_name: "Test",
        last_name: "User",
        email: "test@email.com",
        password: "password"
    }
]

const seed = async () => {
    await sequelize.sync({force: true});

    await Genres.bulkCreate(genreForTicketScholars);
    await User.bulkCreate(seedUsers);
    for (const event of eventsForTicketScholars) {
        await Events.create({
          ...event,
        });
      }

    process.exit(0);
}

seed();


