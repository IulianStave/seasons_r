import React from 'react';
import { summarizers } from 'istanbul-lib-report';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer':'winter';
  } else {
    return lat > 0 ? 'winter': 'summer';
  }
}


const SeasonDisplay = (props) => {
  const month = new Date().getMonth();
  const season = getSeason(props.lat, month);

  return <div> Season Display::: Month: {month} | Season: {season}| Latitude: {props.lat} </div>
};

export default SeasonDisplay;

