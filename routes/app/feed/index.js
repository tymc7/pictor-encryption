const { Router }  = require('express');


const router    = new Router();
module.exports  = router;


router.get('/feed', function(req, res) {
  res.render('app/feed')
});
