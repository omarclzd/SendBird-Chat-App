import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Login from './src/screens/Login';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Login />
      </View>
    );
  }
}

export default App;
