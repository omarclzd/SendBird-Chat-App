import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions, StackActions} from 'react-navigation';
import {sendbirdLogout, initMenu} from '../actions';

class Menu extends Component {
  static navigationOptions = {
    title: 'MENU',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentWillMount() {
    this.props.initMenu();
  }

  componentWillReceiveProps(props) {
    const {isDisconnected} = props;
    if (isDisconnected) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Login'})],
      });
      this.setState({isLoading: false}, () => {
        this.props.navigation.dispatch(resetAction);
      });
    }
  }

  _onProfileButtonPress = () => {
    // TODO: Profile screen
  };

  _onOpenChannelPress = () => {
    // TODO: OpenChannel screen
  };

  _onGroupChannelPress = () => {
    // TODO: GroupChannel screen
  };

  _onDisconnectButtonPress = () => {
    this.props.sendbirdLogout();
  };

  render() {
    return (
      <View>
        <Button title="Profile" onPress={this._onProfileButtonPress} />
        <Button title="Open Channel" onPress={this._onOpenChannelPress} />
        <Button title="Group Channel" onPress={this._onGroupChannelPress} />
        <Button title="Disconnect" onPress={this._onDisconnectButtonPress} />
      </View>
    );
  }
}

function mapStateToProps({menu}) {
  const {isDisconnected} = menu;
  return {isDisconnected};
}

export default connect(
  mapStateToProps,
  {sendbirdLogout, initMenu},
)(Menu);
