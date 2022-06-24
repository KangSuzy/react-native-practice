//App.js
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Setting from './Setting.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        dday: new Date(),
        ddayTitle: '테스트 디데이까지',
        chatLog: [],
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground style = {{width:'100%', height:'100%'}}
                       source={require('./images/background.png')}>
        <View style={styles.settingView}>
        <TouchableOpacity onPress={()=>this.toggleSettingModal()}>
            <Image source={require('./icon/setting.png')}/>
        </TouchableOpacity>
        </View>

        <View style={styles.ddayView}>
        <Text style={styles.titleText}> {this.state.ddayTitle} </Text>
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
            <Setting/>
        </ImageBackground>
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
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: '1%',
    },
    ddayView: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatView: {
        flex: 6,
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
        height: 40,
        width: 50,
        borderRadius: 20,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
     },
     chatInput: {
        backgroundColor: 'white',
        width: '77%',
        height: 40,
        borderWidth: 1,
        borderColor: '#a5a5a5',
        borderRadius: 20
     },
     chatControl: {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent: 'center',
        marginBottom: 10
     },
     chatScrollView: {
        width : '90%',
        margin : 10,
        alignSelf : 'center',
        backgroundColor : '#D3D3D3',
        borderRadius: 5,
     }
});