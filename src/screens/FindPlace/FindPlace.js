import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

//local components
import PlaceList from '../../components/Listing/placesListing';

const mapStateToProps = state => {
  return {
    placesList: state.places.placesList
  }
}


class FindPlaceScreen extends Component {
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
  
  placeSelectedHandler = key => {

    const selPlace = this.props.placesList.find(place => {
        return place.key === key
    })
    console.log('selPlace in FindPlace', selPlace);

    this.props.navigator.push({
      screen: "awesome-places.PlaceDetailScreen",
      title: selPlace.name,
      passProps: {
        selectedPlace: selPlace
      }
    })
  }
  render(){
    const { placesList } = this.props;
    return (
      <View>
        <PlaceList
          placesList={ placesList}
          onPlaceSelected={this.placeSelectedHandler}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps)(FindPlaceScreen);
