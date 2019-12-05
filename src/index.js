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

  // add renderContent() to avoid conditionals in render() and
  // easily apply same CSS class in all cases
  renderContent() {
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat = {this.state.lat} />;
    }
    return <Spinner message='Please accept location request' />;
    /*return <Spinner />;*/
  }


  render() {
    return <div className="border red">{ this.renderContent() } </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));