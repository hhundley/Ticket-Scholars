const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Events } = require('../../models');

// POST route for saved events
router.post('/', withAuth, async (req, res) => {
    try {
    //   add booked events to an array the needs to be stored in another db table. Connect to an account.

    } catch (err) {
      res.status(400).json(err);
    }
  });
// DELETE route for saved events
router.delete('/:id', withAuth, async (req, res) => {
  try {
//    delete specific booked event from an array at a given index
    if (!savedConcerts) {
      res.status(404).json({ message: 'Concert not saved' });
      return;
    }

    res.status(200).json(savedConcerts);
  } catch (err) {
    res.status(500).json(err);
  }
});
