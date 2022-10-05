const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Events, User } = require('../../models');

// POST route for saved events
router.post('/', withAuth, async (req, res) => {
    try {
    //   add booked events to model for those booked events. Needs to include user
    const savedEvent = await Events.findAll({
      where: {
        user_id: req.session.user_id,
      }
    });

    res.status(200).json(savedEvent);

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
      tickets_remaining: req.params.tickets_remaining -1,
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


