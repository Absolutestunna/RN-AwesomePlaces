import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/Ionicons';


import { deletePlace } from '../../redux/actions/index';


const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (placeKey) => dispatch(deletePlace(placeKey))
  }
}



class PlaceModal extends Component {
  onDeletePlaceHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  }

  onClosePageHandler = () => {
    this.props.navigator.pop();
  }
  render(){
    const { selectedPlace } = this.props;
    return (
        <View style={styles.containerStyle}>
          <View>
            <Image source={ selectedPlace.img } style={ styles.modalContentStyling} />
            <Text style={styles.placeName}>{ selectedPlace.name }</Text>
          </View>
          <View style={styles.reactButtonsStyle}>
            <TouchableOpacity onPress={this.onDeletePlaceHandler}>
              <View style={styles.deleteButton}>
                <Icon size={30} name="ios-trash" color="red"/>
              </View>
            </TouchableOpacity>
          </View>
        </View>

    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    margin: 22
  },
  modalContentStyling: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    color: "black",
    marginBottom: 20
  },
  deleteButton: {
    marginRight: 30
  },
  reactButtonsStyle: {
    flexDirection: "row",
    justifyContent: "center"

  }
})


export default connect(null, mapDispatchToProps)(PlaceModal);
