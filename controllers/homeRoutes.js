const router = require("express").Router();
const { Events, Genres, User } = require("../models");
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
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find user based w/ session id
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Events}],
    });

    // serialize user data
    const user = userData.get({ plain: true });

    // Todo: update route with where clause to only display events the user has purchased a ticket too
    // render user data on profile page
    res.render("profile", {
      ...user,
      logged_in: true,
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
