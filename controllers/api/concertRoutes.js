const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Events, User, SavedTickets, Tickets } = require('../../models');

// POST route for saved events
router.post('/', withAuth, async (req, res) => {
    try {
    //   add booked events to model for those booked events. Needs to include user
    const newTicket = await savedTickets.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTicket);

    } catch (err) {
      res.status(400).json(err);
    }
  });
// DELETE route for saved events
router.delete('/:id', withAuth, async (req, res) => {
  try {
//    delete specific booked event from an saved events model once it's ready. 
      const newTicket = await savedTickets.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
          if (!savedTicket) {
      res.status(404).json({ message: 'Ticket not found in your saved ticekts' });
      return;
    }

    res.status(200).json(savedTickets);
  } catch (err) {
    res.status(500).json(err);
  }
});


