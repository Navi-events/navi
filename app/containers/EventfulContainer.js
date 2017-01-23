'use strict';

import { connect } from 'react-redux';
import Eventful from '../components/Eventful';

function mapStateToProps (state, ownProps) {
  function show_alert2()
  {

    let today = new Date();
    let day = today.getDate().toString();
    let month = (today.getMonth() + 1).toString();
    let year = today.getFullYear().toString();
    day = day.length < 2 ?  '0' + day : day;
    month = month.length < 2 ?  '0' + month : month;
        console.log('hello2!!!')
     var app_key = document.getElementById("app_key");
     var where   = document.getElementById("where");
     var query   = document.getElementById("query");
     console.log('where', where.value)
     var oArgs = {
        app_key: app_key.value ,
        q: query.value,
        where: "New York",
        "date": year + month + day + "00" + "-" + year + month + day + "00",
        // "date": "2017012300-2017012300",
        "include": "tags,categories",
        page_size: 10,
        sort_order: "popularity",
     };
     EVDB.API.call("/events/search", oArgs, function(oData) {
        console.log('oData', oData)
      });
  }

  return { show_alert2 };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Eventful);
