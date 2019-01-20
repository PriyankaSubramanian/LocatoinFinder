import withStorage from '../components/locationStorage.js';
import React from 'react';
class StoreResults extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      location: '' 
    }
  }
  componentDidMount() {
    const location = this.props.load('location'); 
    
    if (!location) {
      this.props.reallyLongApiCall()
        .then((user) => {
          this.props.save('location', user.location) || ''; 
          this.setState({
            location: user.location, 
          });
        }); 
    } else {
      this.setState({ location: '' })
    }
  }

  render() {
    const { location } = this.state;
     return (
	   {location}
    )
  }
}

const WrappedComponent = withStorage(StoreResults);

export default WrappedComponent;