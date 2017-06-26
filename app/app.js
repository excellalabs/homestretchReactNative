import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import ChatInput from './components/ChatInput'

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={{ height: (Platform.OS === 'ios') ? 20 : 0 }} />
        <ChatInput />
      </View>
    );
  }
}
