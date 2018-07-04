import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './component/AppNavbar';
import ShoppingList from './component/ShoppingList';
import "./App.css";
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './component/itemModal';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <ItemModal />
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;
