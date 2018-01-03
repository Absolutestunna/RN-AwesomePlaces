import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TextInput, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

//local components
import { addPlace } from '../../redux/actions/index';
import PlaceInput from '../../components/InputContainer/inputContainer';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import LocateMap from '../../components/LocateMap/LocateMap';



const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName))
  }
}

class SharePlaceScreen extends Component {
  
  static navigatorStyle = {
    navBarButtonColor: "orange"
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  state = {
    placeName: '',
  }


  onNavigatorEvent = (event) => {
    if (event.type === "NavBarButtonPress"){
      if (event.id === "sideDrawerToggle"){
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  }



  placeNameHandler = val => {
    this.setState({ placeName: val  })
  }

  placeAddHandler = () => {
    if (this.state.placeName.trim() !== "") {
      this.props.onAddPlace(this.state.placeName)
      this.setState({
        placeName: ""
      })
    };
  }
  render(){
    return (
      <ScrollView>
        <View style={style.container}>
          <MainText>
            <HeadingText>Share a place with us!</HeadingText>
          </MainText>
          <PickImage />
          <LocateMap />

          <PlaceInput
            placeName={this.state.placeName}
            onChangeText={this.placeNameHandler}
            />
          <View style={style.imageButton}>
            <Button
              title="Share the place!"
              onPress={this.placeAddHandler}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
})

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
