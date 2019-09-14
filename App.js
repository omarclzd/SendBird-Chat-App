import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View>
          <Text>User ID</Text>
          <TextInput />
        </View>
        <View>
          <Text>Nickname</Text>
          <TextInput />
        </View>
        <View>
          <Button title="Connect" />
        </View>
      </View>
    );
  }
}

export default App;
