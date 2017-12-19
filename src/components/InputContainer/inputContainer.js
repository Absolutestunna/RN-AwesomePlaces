import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';

class InputContainer extends Component {

  state = {
    placeName: '',
  }

  textInputChangeHandler = (e) => {
    this.setState({ placeName: e})
  }

  placesSubmitHandler = (placeName) => {

    if (this.state.placeName.trim() === ""){ return; }

    this.props.onPlaceInputHandler(this.state.placeName)
  }

  componentDidMount(){
    this.setState({
      placeName: ""
    })
  }

  render(){
    const { placeName } = this.state;
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="An awesome placeholder"
          value={placeName}
          onChangeText={this.textInputChangeHandler}
        />
        <Button
          style={styles.placeButton}
          title="Add"
          onPress={this.placesSubmitHandler}
        />
      </View>
    )
  }

}


const styles = StyleSheet.create({

  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%'
  }

})

export default InputContainer;
