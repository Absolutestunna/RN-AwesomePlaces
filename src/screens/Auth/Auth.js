import React, { Component } from 'react';
import { View, Text, Button, TextInput, ImageBackground, styleheet, Dimensions, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';


//local assets
import localImage from '../../assets/mountain.jpg'

class AuthScreen extends Component {

  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
  }

  constructor(props){
    super(props);
    Dimensions.addEventListener("change", this.updateStylesFunc)
  }

  updateStylesFunc = dims => {
    this.setState({
      viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
    })
  }

  componentWillUnmount(){
    //prevent memory leak
    Dimensions.removeEventListener("change", this.updateStylesFunc)
  }

  loginHandler = () => {
    startMainTabs();
  }
  render(){
    let headingText = null;
    if (this.state.viewMode === "portrait"){
      headingText = (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      )
    }
    return (
      <ImageBackground source={localImage} style={style.backgroundImage}>
        <View style={style.authContainer}>
          {headingText}
          <ButtonWithBackground color="#29aa4f" onPress={() => alert("message from the future")}>Switch to Login</ButtonWithBackground>
          <View style={style.inputContainer}>
            <DefaultInput placeholder="Your Email Address" style={style.input}/>
            <View style={this.state.viewMode === "portrait" ? style.portraitPasswordContainer : style.landScapePasswordContainer}>
              <View style={this.state.viewMode === "portrait" ? style.portraitPasswordWrapper : style.landScapePasswordWrapper}>
                <DefaultInput placeholder="Password" style={style.input}/>
              </View>
              <View style={this.state.viewMode === "portrait" ? style.portraitPasswordWrapper : style.landScapePasswordWrapper}>
                <DefaultInput placeholder="Confirm Password" style={style.input}/>
              </View>
            </View>
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
  },
  landScapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  landScapePasswordWrapper: {
    width: "45%"
  },
  portraitPasswordWrapper: {
    width: "100%"
  }
})

export default AuthScreen;
