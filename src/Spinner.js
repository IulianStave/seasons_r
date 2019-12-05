// loader
import './SeasonDisplay.css'

import React from 'react';

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {props.message}
      </div>
    </div>
  );
};
// default message, alternativ to {props.message || 'Loading...'} 
// in case the component is referenced without a message
Spinner.defaultProps = {
  message: 'Loading...'
}
export default Spinner;