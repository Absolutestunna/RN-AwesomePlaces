import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import DefaultInput from '../UI/DefaultInput/DefaultInput';


const InputContainer = props => {
  return (
      <DefaultInput
        placeholder="Place Name"
        value={props.placeName}
        onChangeText={props.onChangeText}
        />
    )
}


export default InputContainer;
