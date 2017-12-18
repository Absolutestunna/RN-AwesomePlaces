import React, { Component } from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


const placeModal = ({ selectedPlace, onModalClose, onItemDeleted }) => {
  let modalContent = null;

  if ( selectedPlace) {
    modalContent = (
      <View>
        <Image source={ selectedPlace.img } style={styles.modalContentStyling} />
        <Text style={styles.placeName}>{ selectedPlace.name }</Text>
      </View>
    )
  }

  return (
    <Modal onRequestClose={onModalClose} visible={ selectedPlace !== null } animationType="slide">
      <View style={styles.modalContainerStyle}>
        { modalContent }
        <View style={styles.reactButtonsStyle}>
          <TouchableOpacity onPress={onItemDeleted}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onModalClose}>
            <View style={styles.closeButton}>
              <Icon size={30} name="ios-close" color="black"/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

  )
}

const styles = StyleSheet.create({
  modalContainerStyle: {
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
    // alignItems: "center"
    marginRight: 35
  },
  reactButtonsStyle: {
    flexDirection: "row",
    justifyContent: "center"

  }
})


export default placeModal;
