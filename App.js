import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';





const mapStateToProps = state => {
  console.log('state', state)
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
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
