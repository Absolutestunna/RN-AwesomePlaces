import React, { Component } from 'react';
import { View, Text, Button, TextInput, ImageBackground, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';


//local assets
import localImage from '../../assets/mountain.jpg'

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }
  render(){
    return (
      <ImageBackground source={localImage} style={style.backgroundImage}>
        <View style={style.authContainer}>
          <MainText>
            <HeadingText>Please Log In</HeadingText>
          </MainText>
          <ButtonWithBackground color="#29aa4f" onPress={() => alert("message from the future")}>Switch to Login</ButtonWithBackground>
          <View style={style.inputContainer}>
            <DefaultInput placeholder="Your Email Address" style={style.input}/>
            <DefaultInput placeholder="Password" style={style.input}/>
            <DefaultInput placeholder="Confirm Password" style={style.input}/>
          </View>
          <ButtonWithBackground color="#29aa42" onPress={this.loginHandler}>Submit</ButtonWithBackground>
        </View>
      </ImageBackground>
    )
  }
}

const style = StyleSheet.create({
  authContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  }
})

export default AuthScreen;
