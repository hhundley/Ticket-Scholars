const router = require('express').Router();
const { User } = require('../../models');

// post route for creating a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    // Set up session for logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// post route for logging in an already created user
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({
        where: {email: req.body.email},
      });
  
      if (!userData) {
        res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400).json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      // Once the user successfully logs in, set up the sessions variable 'loggedIn'
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.status(200).json({ user: userData, message: 'login successful.' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// log a user out and destroy session upon logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
//   export router
module.exports = router;