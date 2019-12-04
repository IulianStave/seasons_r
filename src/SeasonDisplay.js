import React from 'react';

const seasonConfig = {
  summer: {
    text: "Summer time",
    iconName: "sun"
  },
  winter: {
    text: "Burr, it's cold outside",
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer':'winter';
  } else {
    return lat > 0 ? 'winter': 'summer';
  }
};


const SeasonDisplay = (props) => {
  const month = new Date().getMonth();
  const season = getSeason(props.lat, month);
  const { text, iconName } = seasonConfig[season];
  /*
  const seasonText = 
    season === 'winter' ? 'Blurr, it is chilly' : 'Summer time';
  const icon =
    season === 'winter' ? 'snowflake' : 'sun';
  */
  return (
    <div>
      <i className = {`${iconName} icon`} />
      <h1>{text}</h1>
      <i className = {`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;

