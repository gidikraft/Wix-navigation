/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from './App';
import HomeScreen from "./src/screen/HomeScreen";
import Settings from "./src/screen/Settings";
import Wallet from "./src/screen/Wallet";

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => Settings);
Navigation.registerComponent('Wallet', () => Wallet);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'App'
            }
          }
        ]
      }
    }
  });
});

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: "brown"
  },
  topBar: {
    title: {
      color: 'blue', 
    },
    // visible: false
  },
  hardwareBackButton: {
    color: 'yellow'
  },
  background: {
    color: "#fff"
  }
})
