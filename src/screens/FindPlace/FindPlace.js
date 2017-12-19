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

  render(){
    const { placesList } = this.props;
    return (
      <View>
        <PlaceList
          placesList={ placesList}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps)(FindPlaceScreen);
