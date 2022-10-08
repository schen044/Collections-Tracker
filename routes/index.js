var express = require('express');
var router = express.Router();
const passport = require('passport')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// google oauth login route
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
  prompt: "select_account"
}));

// google oauth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/movies',
    failureRedirect: '/movies'
  }
));

// oauth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/movies');
});

module.exports = router;
