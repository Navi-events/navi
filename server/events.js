'use strict';

const NodeGeocoder = require('node-geocoder');
const router = require('express').Router();
const request = require('request');  //npm package that provides a simple way to make http and https calls. It also follows redirects by default.

const options = {
  provider: 'google',
  httpAdapter: 'https',
  apiKey: 'AIzaSyAFPCRFuQJTc36hz4mNLQm_jh1zHMIcne4',
  formatter: null
};

let geocoder = NodeGeocoder(options);

// geocoder.geocode(
// "Broadway NYC", (err, res) => {
//   console.log(res);
// });


module.exports = router;

router.get('/', function(req, res, next) {
  //need to make this API request in express since making it on the front-end with axios will result in a error: "axios no 'access-control-allow-origin' header is present on the requested resource"
  let today = new Date();
  let day = today.getDate().toString();
  let month = (today.getMonth() + 1).toString();
  let year = today.getFullYear().toString();
  day = day.length < 2 ?  '0' + day : day;
  month = month.length < 2 ?  '0' + month : month;
  var url = `https://api.cityofnewyork.us/calendar/v1/search.htm?app_id=f4a6807c&app_key=stackathon&startDate=${month}%2F${day}%2F${year}+12%3A00+am&endDate=${month}%2F${day}%2F${year}+11%3A59+pm`;

  request(url, (err, response, body) => {
    var eventList = JSON.parse(body);
    var promiseArray = [];
    eventList.items.forEach(attraction => {
      let searchQuery = attraction.address;
      // console.log(i, searchQuery)
      let checkForPeriods = searchQuery.indexOf('.');
      if (checkForPeriods > -1) {
        searchQuery = searchQuery.slice(0, checkForPeriods);
      }
      promiseArray.push(geocoder.geocode(searchQuery));
     });
    return Promise.all(promiseArray)
    .then(arrayOfFulfilledPromises => {
      // console.log('this is the array', arrayOfFulfilledPromises);
      let listOfEvents = JSON.parse(body).items;
      // console.log(listOfEvents);
      let updatedList = listOfEvents.map((event, i) => {
        if (arrayOfFulfilledPromises[i].length === 0) {
          if (event.geometry) {
            event.lat = +event.geometry[0].lat;
            event.lng = +event.geometry[0].lng;
            return event;
          } else {
            event.hasGPS = false;
            return event;
          }
        } else if (event.name === 'NYC Broadway Week') {
            event.hasGPS = false;
            return event;
        } else {
          event.lat = arrayOfFulfilledPromises[i][0].latitude;
          event.lng = arrayOfFulfilledPromises[i][0].longitude;
          return event;
        }
      });
      res.json(updatedList);
    })
    .catch(next);
  });
});

