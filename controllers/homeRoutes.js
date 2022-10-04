const router = require("express").Router();
const { Events, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // retreive concerts and required attributes. Serialize concerts as plain js objects
    const concertData = await Events.findAll();

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

// retreive concert by id and required attributes. Serialize concert as plain js objects
// Todo: Check render page name when handlebars file is created.
router.get("/concerts/:id", async (req, res) => {
  try {
    const concertData = await Events.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ model: Tickets }],
    });
    const concert = concertData.get({ plain: true });
    // render onjects and session id in homepage handlebars template
    res.render("checkout", {
      ...concert,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Require user to be logged in to access the profile page
// Todo: ask where profile data will be displayed. Will we have profile page, or is saved events the profile page
// Todo: Do we actually need this?
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find user based w/ session id
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      // Do we need a different model?
      include: [{ model: Events }],
    });

    // serialize user data
    const user = userData.get({ plain: true });

    // render user data on profile page
    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get route for tickets
router.get("/profile", withAuth, async (req, res) => {
  try {
    // retreive concerts and required attributes. Serialize concerts as plain js objects
    // Todo: update model name
    const savedTicketData = await savedTickets.findAll();

    const savedTickets = savedTicketData.map((savedTickets) =>
      savedTickets.get({ plain: true })
    );

    // render objects and session id in homepage handlebars template
    res.render("profile", {
      savedTickets,
      logged_in: req.session.logged_in,
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
