import React, { Component } from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';

class LocateMap extends Component {
  render(){
    return (
      <View style={style.container}>
        <View style={style.placeholder}>
          <Text>Map</Text>
        </View>
        <View style={style.imageButton}>
          <Button title="Locate Me" onPress={() => alert('som')}/>
        </View>
      </View>

    )
  }
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  imageButton: {
    margin: 8
  }
})

export default LocateMap;
