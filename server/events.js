'use strict'

const router = require('express').Router()
const request = require('request');

module.exports = router;

router.get('/', function(req, res) {
  //need to make this API request in express since making it on the front-end with axios will result in a error: "axios no 'access-control-allow-origin' header is present on the requested resource"
    var url = 'https://api.cityofnewyork.us/calendar/v1/search.htm?app_id=f4a6807c&app_key=stackathon&startDate=01%2F20%2F2017+12%3A00+am&endDate=01%2F20%2F2017+11%3A59+pm';
    request(url).pipe(res);
  })
