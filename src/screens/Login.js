import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions, StackActions} from 'react-navigation';
import {initLogin, sendbirdLogin} from '../actions';

class Login extends Component {
  static navigationOptions = {
    title: 'LOGIN',
  };

  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      nickname: '',
    };
  }

  componentDidMount() {
    this.props.initLogin();
  }

  componentWillReceiveProps(props) {
    const {user, error} = props;
    if (user) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Menu'})],
      });
      this.setState({userId: '', nickname: ''}, () => {
        this.props.navigation.dispatch(resetAction);
      });
    }
  }

  _userIdChanged = userId => {
    this.setState({userId});
  };

  _nicknameChanged = nickname => {
    this.setState({nickname});
  };

  _onButtonPress = () => {
    const {userId, nickname} = this.state;
    this.props.sendbirdLogin({userId, nickname});
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
          <Text style={{color: 'red'}}>{this.props.error}</Text>
        </View>
      </View>
    );
  }
}
function mapStateToProps({login}) {
  const {error, user} = login;
  return {error, user};
}

export default connect(
  mapStateToProps,
  {initLogin, sendbirdLogin},
)(Login);
