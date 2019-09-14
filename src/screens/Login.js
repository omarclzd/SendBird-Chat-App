import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {APP_ID} from 'react-native-dotenv';
import SendBird from 'sendbird';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      nickname: '',
      error: '',
    };
    this._onButtonPress = this._onButtonPress.bind(this);
  }

  _userIdChanged = userId => {
    this.setState({userId});
  };

  _nicknameChanged = nickname => {
    this.setState({nickname});
  };

  _onButtonPress = () => {
    const {userId, nickname} = this.state;
    const sb = new SendBird({appId: '62E68553-C4A2-4A62-8A3C-7EADDE8519CF'});
    sb.connect(userId, (user, error) => {
      if (error) {
        this.setState({error});
      } else {
        sb.updateCurrentUserInfo(nickname, null, (user, error) => {
          if (error) {
            this.setState({error});
          } else {
            this.setState(
              {
                userId: '',
                nickname: '',
                error: '',
              },
              () => {
                console.log('connected');
              },
            );
          }
        });
      }
    });
  };

  render() {
    return (
      <View>
        <View>
          <Text>User ID</Text>
          <TextInput
            value={this.state.userId}
            onChangeText={this._userIdChanged}
          />
        </View>
        <View>
          <Text>Nickname</Text>
          <TextInput
            value={this.state.nickname}
            onChangeText={this._nicknameChanged}
          />
        </View>
        <View>
          <Button title="Connect" onPress={this._onButtonPress} />
        </View>
        <View>
          <Text style={{color: 'red'}}>Error message</Text>
        </View>
      </View>
    );
  }
}

export default Login;
