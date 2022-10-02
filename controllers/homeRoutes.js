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
// Todo: check the "concerts" path and make sure "Concert" render is right when the view is created for the concert details page.
router.get("/concerts/:id", async (req, res) => {
  try {
    const concertData = await Events.findPyPk(req.params.id);
    const concert = concertData.get({ plain: true });
    // render onjects and session id in homepage handlebars template
    res.render("concert", {
      ...concert,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Require user to be logged in to access the profile page
// Todo: ask where profile data will be displayed. Will we have profile page, or is saved events the profile page
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

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
