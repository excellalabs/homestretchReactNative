import React, { Component } from 'react';
import {
  View,
  TextInput,
} from 'react-native';

export default class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'What is your message?' }
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ backgroundColor: '#ededed', height: 60 }}
          onFocus= {() => this.setState({text : ''})}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}
