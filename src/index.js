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
  
  
  render() {
    
    return (
      <div>
        Latitude: { this.state.lat }
        <br/>
        Error: { this.state.errorMessage }
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
  );

