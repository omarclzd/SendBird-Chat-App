import React, {Component} from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/screens/Login';
import Menu from './src/screens/Menu';

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Menu: {screen: Menu},
});

const AppContainer = createAppContainer(MainNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
