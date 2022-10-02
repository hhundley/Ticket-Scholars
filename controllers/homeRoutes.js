const router = require("express").Router();
const { Events, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // retreive concerts and required attributes. Serialize concerts as plain js objects
    const concertData = await Events.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const concerts = concertData.map((concert) => concert.get({ plain: true }));

    // render onjects and session id in homepage handlebars template
    res.render('homepage', { 
      concerts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// retreive concert by id and required attributes. Serialize concert as plain js objects
// Todo: check the "concerts" path and make sure "Concert" render is right when the view is created for the concert details page.
router.get('/concerts/:id', async (req,res) => {
  try {
    const concertData = await Events.findPyPk(req.params.id, {
      include: [
        {model: User,
        attributes: ['name'],},
      ],
    })
    const concert = concertDta.fet({plain:true});
    // render onjects and session id in homepage handlebars template
    res.render('concert', {
      ...concert, logged_in: req.session.logged_in
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
