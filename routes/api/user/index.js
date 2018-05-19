const Encryption  = require('../../../models/encryption');
const { Router }  = require('express');
const User        = require('../../../models/user');
const passport    = require('passport');

const router      = new Router();
module.exports    = router;


router.get('/user', async function(req, res) {
  // const users = await User.findAll();
  res.json([]);
})


router.get('/user/:id', async function(req, res) {
  // const user  = await User.findOne({ id: req.params.id });
  // const encrypted = await Encryption.encryptUsingPublicKey({ key: user.public_key, data: user });
  // console.log(encrypted);
  // res.json(user);
  res.json({
    id: 1,
    basic: {
      name: {
        first:  'Dominic',
        last:   'Mathis'
      },
      email:    'dmathis@gmail.com',
      location: {
        city:   'New York City',
        state:  'New York'
      }
    },
    encrypted: {
      phone:    '415-867-5309',
      gender:   'Male',
      birthdate: 'Jul 02, 1985',
      language: 'English',
      school: 'Stanford',
      work:   'Myspace'
    }
  });
})


router.post('/user/new', async function(req, res) {
  const { first_name, last_name, email, password,location, public_key} = req.body;
  const response = await User.create({ first_name, last_name, email, password, location, public_key });
  console.log(response);
  //req.login(response.insertId, function(err){
  //});
})


router.post('/user/update', function(req, res) {
  // update DB with data
  console.log(req.body);
})

passport.serializeUser(function(user_id, done){
  done(null, user_id);
});

passport.deserializeUser(function (user_id, done){
  done(null, user_id);
});
