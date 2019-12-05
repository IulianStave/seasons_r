import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
 state = { lat: null, errorMessage: '' };

 componentDidMount() {
  //call the geolocator API service
  window.navigator.geolocation.getCurrentPosition(
    position => this.setState({ lat: position.coords.latitude }),
    err => this.setState({ errorMessage: err.message })
  );
}

render() {
  if (!this.state.lat && this.state.errorMessage) {
    return <div>Error: {this.state.errorMessage}</div>;
  }
  if (this.state.lat && !this.state.errorMessage) {
    return <SeasonDisplay lat = {this.state.lat} />;
  }
  return <Spinner message='Please accept location request' />;
  /*return <Spinner />;*/
}
}

ReactDOM.render(<App />, document.getElementById("root"));