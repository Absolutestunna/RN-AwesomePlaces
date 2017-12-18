import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

//custom function
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/redux/actions/index';

//local components
import InputContainer from './src/components/InputContainer/inputContainer';
import PlaceDetail from './src/components/PlaceDetail/placeDetail';
import ListItems from './src/components/Listing/placesListing';


const mapStateToProps = state => {
  return {
    placesList: state.places.placesList,
    selectedPlace: state.places.selectedPlace,
    placeName: state.places.placeName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectedPlace: (key) => dispatch(selectPlace(key)),
    onDeselectedPlace: () => dispatch(deselectPlace())
  }
}

class App extends React.Component {
  render() {
    const {
      onAddPlace,
      placesList,
      selectedPlace,
      onDeselectedPlace,
      onDeletePlace,
      onItemDeleted,
      onItemSelected } = this.props;
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={selectedPlace}
          onModalClose={onDeselectedPlace}
          onItemDeleted={onDeletePlace}
          />
          <InputContainer
            onPlaceInputHandler={(placeName) => onAddPlace(placeName)}
            />
        <ListItems
          placesList = { placesList }
          onItemDeleted={onDeletePlace}
          onItemSelected={(selKey) => onSelectedPlace(selKey)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 50
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
