const router = require("express").Router();
const { Events, Genres, User, Tickets } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // retreive concerts and required attributes. Serialize concerts as plain js objects
    const concertData = await Events.findAll({
      include: [{model: Genres}],
    });

    const concerts = concertData.map((concert) => concert.get({ plain: true }));

    // render onjects and session id in homepage handlebars template
    res.render("homepage", {
      concerts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Require user to be logged in to access the profile page
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Tickets, include: [Events] } ],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
