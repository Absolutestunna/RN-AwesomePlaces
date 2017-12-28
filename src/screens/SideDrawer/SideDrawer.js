import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import DrawerItem from '../../components/UI/DrawerItems/DrawerItems';

class SideDrawer extends Component {
  signOutHandler = () => {
    console.log('this.props', this.props);
    this.props.navigator.push({
      screen: 'awesome-places.AuthScreen'

    });

  }
  render(){
    return (
      <View style={[styles.container, {width: Dimensions.get('window').width * 0.8}]}>
        <TouchableOpacity onPress={this.signOutHandler}>
          <DrawerItem name="ios-log-out" size={30} color="#bbb" text="Sign Out" />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "white",
    flex: 1
  }
})

export default SideDrawer;
