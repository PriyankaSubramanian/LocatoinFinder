import React, { Component } from 'react'; 
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';
import LayoutComponent from './components/locationLayout.js';

let store = configureStore();

class App extends Component {

  render() {
    return (
    <div class="searchWrapper">
      <Provider store={store}>
          <LayoutComponent />
      </Provider>
    </div>
  )
   
  }
}

export default App;
