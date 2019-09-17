import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Provider} from 'react-redux';
import store from './src/store';

import Login from './src/screens/Login';
import Menu from './src/screens/Menu';

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Menu: {screen: Menu},
});

const AppContainer = createAppContainer(MainNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
