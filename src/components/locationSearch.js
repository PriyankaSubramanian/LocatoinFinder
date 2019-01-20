import React, { Component } from 'react'; 
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      query: '' 
    };
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
  }

  handleScriptLoad() { 
    var options = {
      types: ['(cities)'],
    };

    // Initialize Google Autocomplete functionality
    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options,
    ); 
    this.autocomplete.addListener('place_changed', this.props.triggerStoreMethod);
  }
  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoq4_-BeKtYRIs-3FjJL721G1eP5DaU0g&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <div className="locationWrapper">
          <SearchBar id="autocomplete" placeholder="Enter a spot"
            style={{
              margin: '0 auto',
              maxWidth: 700 
            }}
            
          />
          <div>{this.state.results}</div>
        </div>
      </div>
    );
  }
}

export default Search;