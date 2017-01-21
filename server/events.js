'use strict'

const router = require('express').Router()
const request = require('request');  //npm package that provides a simple way to make http and https calls. It also follows redirects by default.

module.exports = router;

router.get('/', function(req, res) {
  //need to make this API request in express since making it on the front-end with axios will result in a error: "axios no 'access-control-allow-origin' header is present on the requested resource"
  let today = new Date();
  let day = today.getDate().toString();
  let month = (today.getMonth() + 1).toString();
  let year = today.getFullYear().toString();
  day = day.length < 2 ?  '0' + day : day;
  month = month.length < 2 ?  '0' + month : month;
    var url = `https://api.cityofnewyork.us/calendar/v1/search.htm?app_id=f4a6807c&app_key=stackathon&startDate=${month}%2F${day}%2F${year}+12%3A00+am&endDate=${month}%2F${day}%2F${year}+11%3A59+pm`;
    console.log(url)
    request(url).pipe(res);
  })
