const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Events, User, Tickets, Genres } = require('../../models');


// POST for creating a new ticket
router.post('/', withAuth, async (req, res) => {
  try {
    const newTicket = await Tickets.create({
      user_id: req.session.user_id,
      event_id: req.params.event_id,
    });

    res.status(200).json(newTicket);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update ticket count (subtract)
// Todo: figure out increments and update attribute name
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Events.update(
    {
      total_tickets: req.params.tickets_remaining -1,
    },
    {
      where: {id: req.params.id},
    }
  )
    .then((eventData) => {
      if (!eventData) {
        res.status(404).json({ message: "Event not found." });
        return;
      }
      res.status(200).json(eventData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Test get route for concerts
router.get("/", async (req, res) => {
  try {
    // retreive concerts and required attributes. Serialize concerts as plain js objects
     const eventData = await Events.findAll({
      include: [{model: Genres}],
     });

res.status(200).json(eventData);

    }
   catch (err) {
    res.status(500).json(err);
  }
});

// exporting router
module.exports = router;