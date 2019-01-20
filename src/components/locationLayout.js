import React from 'react';
import { connect } from 'react-redux';
import {updateHistory} from '../actions/locationSearchActions'
import Search from '../components/locationSearch.js'; 

const storeResults = []

const LayoutComponent = (props) => { 
  return (
      <div>
          <Search triggerStoreMethod={props.dispatchSearchResults}/>
          <div>{props.renderResults}</div>
      </div>
            
  )
}

const mapStateToProps = (state) => {
    return {
      renderResults: state.searchResults
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSearchResults: () => {
          let location = document.getElementById('autocomplete');
          dispatch(updateHistory(location.value));        
          document.getElementById('autocomplete').value = '';
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LayoutComponent)