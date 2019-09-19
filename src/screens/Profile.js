import React, {Component} from 'react';
import {View, Text, Button, TextInput, Image} from 'react-native';
import {connect} from 'react-redux';
import {initProfile, getCurrentUserInfo, updateProfile} from '../actions';

class Profile extends Component {
  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    return {
      title: 'PROFILE',
      headerRight: (
        <Button
          title="save"
          onPress={() => {
            params.handleSave();
          }}
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      profileUrl: '',
      nickname: '',
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({handleSave: this._onSaveButtonPress});
    this.props.initProfile();
    this.props.getCurrentUserInfo();
  }

  componentWillReceiveProps(props) {
    const {userInfo, isSaved} = props;
    if (userInfo) {
      const {profileUrl, nickname} = userInfo;
      this.setState({profileUrl, nickname});
    }
    if (isSaved) {
      this.props.navigation.goBack();
    }
  }

  _onNicknameChanged = nickname => {
    this.setState({nickname});
  };

  _onSaveButtonPress = () => {
    this.props.updateProfile(this.state.nickname);
  };

  render() {
    return (
      <View>
        <View>
          <Image source={{uri: this.state.profileUrl}} />
        </View>
        <Text>Nickname</Text>
        <TextInput
          value={this.state.nickname}
          maxLength={12}
          onChangeText={this._onNicknameChanged}
        />
        <Text>{this.props.error}</Text>
      </View>
    );
  }
}

function mapStateToProps({profile}) {
  const {userInfo, error, isSaved} = profile;
  return {userInfo, error, isSaved};
}

export default connect(
  mapStateToProps,
  {initProfile, getCurrentUserInfo, updateProfile},
)(Profile);
