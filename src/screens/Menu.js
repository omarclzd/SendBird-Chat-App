import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Menu extends Component {
  static navigationOptions = {
    title: 'MENU',
  };
  render() {
    return (
      <View>
        <Text>Menu</Text>
      </View>
    );
  }
}

export default Menu;
