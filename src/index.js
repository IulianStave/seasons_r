import React from 'react';
import ReactDOM from 'react-dom';

/*
const App = () => {
  
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );
  
  return (
          <h1>Latitude: </h1>
  );
}
*/

class App extends React.Component {
  // initialize state
  constructor(props){
    super(props);
    
    // one way to initialize state
    this.state = { lat: null, errorMessage: '' };
    
    //call the geolocator API service
    window.navigator.geolocation.getCurrentPosition(
      position => { 
        //update the State using setState({})
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message});
        }
    );
  }
  
  // the other way the state is initialized and updated
  componentDidMount() {
    console.log('My component was initialized');
  }

  componentDidUpdate() {
    console.log('My component was updated - and rerendered');
  }

  render() {
    
    if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>
          Latitude: { this.state.lat }
        </div>
      );
    }
    if (!this.state.lat && this.state.errorMessage) {
      return (
        <div>
          Error: { this.state.errorMessage }
        </div>
      );
      }
      return <div>Loading...</div>;
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
  );

