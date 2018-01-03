import React, { Component } from 'react';
import { View, Text, Button, TextInput, ImageBackground, styleheet, Dimensions, StyleSheet } from 'react-native';
import { connect } from 'react-redux'


import startMainTabs from '../MainTabs/startMainTabs';

//UI components
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

//utility functions
import validate from '../../utility/validation';

//redux actions
import { tryAuth } from '../../redux/actions/index';

//local assets
import localImage from '../../assets/mountain.jpg'


const mapDispatchToProps = dispatch => {
  return {
    onLogin: (authData) => dispatch(tryAuth(authData))
  }
}

class AuthScreen extends Component {

  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        },
        touched: false
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        },
        touched: false
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: 'password'
        },
        touched: false
      }
    }
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
    const { email, password } = this.state.controls;
    const authData = {
      email: email.value,
      password: password.value
    }
    this.props.onLogin(authData)
    startMainTabs();
  }

  updateInputState = (key, value) => {
    let connectedValues = {};
    if (this.state.controls[key].validationRules.equalTo){
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValues = {
        ...connectedValues,
        equalTo: equalValue
      };
    }

    if (key === 'password'){
      connectedValues = {
        ...connectedValues,
        equalTo: value
      };
    }

    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === "password"
                ? validate(
                  prevState.controls.confirmPassword.value,
                  prevState.controls.confirmPassword.validationRules,
                  connectedValues
                ) :
                prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(value, prevState.controls[key].validationRules, connectedValues),
            touched: true
          }
        }
      }
    })
  }

  render(){
    let headingText = null;
    let { controls: { email, password, confirmPassword } } = this.state;
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
            <DefaultInput
              placeholder="Your Email Address"
              style={style.input}
              value={ email.value}
              valid={email.valid}
              touched={email.touched}
              onChangeText={(val) => this.updateInputState('email', val)}
              />
            <View style={this.state.viewMode === "portrait" ? style.portraitPasswordContainer : style.landScapePasswordContainer}>
              <View style={this.state.viewMode === "portrait" ? style.portraitPasswordWrapper : style.landScapePasswordWrapper}>
                <DefaultInput
                  placeholder="Password"
                  style={style.input}
                  value={ password.value }
                  valid={password.valid}
                  touched={password.touched}
                  onChangeText={(val) => this.updateInputState('password', val)}

                  />
              </View>
              <View style={this.state.viewMode === "portrait" ? style.portraitPasswordWrapper : style.landScapePasswordWrapper}>
                <DefaultInput
                  placeholder="Confirm Password"
                  style={style.input}
                  valid={confirmPassword.valid}
                  value={ confirmPassword.value }
                  touched={confirmPassword.touched}
                  onChangeText={(val) => this.updateInputState('confirmPassword', val)}
                />
              </View>
            </View>
          </View>
          <ButtonWithBackground
            color="#29aa42"
            onPress={this.loginHandler}
            disabled={!email.valid || !password.valid || !confirmPassword.valid}
            >Submit
          </ButtonWithBackground>
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

export default connect(null, mapDispatchToProps)(AuthScreen);
