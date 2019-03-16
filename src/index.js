console.disableYellowBox = true;

import React, { Component } from "react";

import { Provider } from "react-redux";

import StackNavigator from "./navigation/index";
import configureStore from "./redux/Store";

const { store } = configureStore();

export class App extends Component {
  

  render() {
    return (
     <Provider store={store}>
        <StackNavigator />
    </Provider>  
    );
  }
}

export default App;
