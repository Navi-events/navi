import React from 'react';
import SingleEventContainer from '../containers/SingleEventContainer';

export default function Events (props) {
  return (
    <div>
      <form >
        Your app_key <input id="app_key" type="text" name="app_key" value="QMWF79Gdgd6XdmXV" />
        Where <input id="where"   type="text" name="where" value="New York"/>
        Query <input id="query"   type="text" name="query" value="music" />
      </form>
      <input type="button" onClick={props.show_alert2} value="Filtered query " />
    </div>
  );
}
