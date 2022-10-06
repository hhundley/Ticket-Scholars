const withAuth = (req, res, next) => {
    
        // require login to access path
        if (!req.session.logged_in) {
            res.redirect('/login');
        } else {
            next();
        }
    };
  
// export module
module.exports = withAuth;
  