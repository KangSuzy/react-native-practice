//App.js
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.settingView}>
        <TouchableOpacity>
        <Image source={require('./icon/setting.png')}/>
        </TouchableOpacity>
        </View>

        <View style={styles.ddayView}>
        <Text style={styles.titleText}> 수능까지 </Text>
        <Text style= {styles.ddayText}> D-123 </Text>
        <Text style={styles.dateText}> 2022년 06월 21일 </Text>
        </View>

        <View style={styles.chatView}>
        <ScrollView style={styles.chatScrollView}>

        </ScrollView>
            <View style={styles.chatControl}>
                <TextInput style={styles.chatInput}/>
                <TouchableOpacity style={styles.sendButton}>
                <Text> SEND </Text>
                </TouchableOpacity>
            </View>
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
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: '1%',
    },
    ddayView: {
        flex: 6,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatView: {
        flex: 6,
        backgroundColor: 'blue',
    },
     titleText:{
        alignSelf: 'flex-end',
        fontSize: 36,
        fontWeight: 'bold',
        color: '#4A4A4A',
        marginRight: '15%',
     },
     ddayText: {
        fontSize: 100,
        fontWeight: 'bold',
        color: '#4A4A4A',
     },
     dateText: {
        alignSelf: 'flex-start',
        fontSize: 21,
        fontWeight: 'bold',
        color: '#4A4A4A',
        marginLeft: '15%',
     },
     sendButton: {
        backgroundColor: 'yellow',
     },
     chatInput: {
        backgroundColor: 'white',
        width: '80%',
     },
     chatControl: {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent: 'center',
     },
     chatScrollView: {
        width : '90%',
        alignSelf : 'center',
        backgroundColor : 'grey',
     }
});