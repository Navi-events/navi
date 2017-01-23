'use strict';

const router = require('express').Router();
const request = require('request');  //npm package that provides a simple way to make http and https calls. It also follows redirects by default.

const url = 'https://api.meetup.com/2/open_events?&sign=true&photo-host=public&country=us&city=new york&state=ny&time=,1w&page=20&key=14432b3e4c29273fb3b6d6213125449';

router.get('/', (req, res, next) => {
  request(url, (err, response, body) => {
    if (err) {
      return next(err);
    }
    res.json(JSON.parse(body));
  });
});

module.exports = router;
