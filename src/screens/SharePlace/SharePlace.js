import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

//local components
import PlaceInput from '../../components/InputContainer/inputContainer';
import { addPlace } from '../../redux/actions/index';

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName))
  }
}

class SharePlaceScreen extends Component {
  state = {
    place: ""
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = (event) => {
    console.log('event', event);
    if (event.type === "NavBarButtonPress"){
      if (event.id === "sideDrawerToggle"){
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  }

  placeAddHandler = placeName => {
    this.setState({place: placeName})     //delete later
    this.props.onAddPlace(placeName);
  }
  render(){
    let placeStatus = ( this.state.place === "") ? "" : (`${this.state.place} has been added.`)
    return (
      <View>
        <PlaceInput onPlaceInputHandler={this.placeAddHandler}/>
        <Text>{placeStatus}</Text>
      </View>
    )
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
