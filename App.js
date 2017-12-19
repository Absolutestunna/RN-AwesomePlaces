import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';


//screens
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/placeDetail';

//store configuration
import configureStore from './src/redux/configureStore';
const store = configureStore();

//register screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider);


//start the default app
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
})
