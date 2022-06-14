//App.js
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.settingView}>

        </View>
        <View style={styles.ddayView}>

        </View>
        <View style={styles.chatView}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    settingView: {
        flex: 1,
        backgroundColor: 'red',
    },
    ddayView: {
        flex: 6,
        backgroundColor: 'green',
    },
    chatView: {
        flex: 6,
        backgroundColor: 'blue',
    },
});