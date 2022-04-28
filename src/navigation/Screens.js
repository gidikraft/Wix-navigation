import {Navigation} from 'react-native-navigation';

export function registerScreens() {
    Navigation.registerComponent('Home', () => require('../screen/HomeScreen').default )
    Navigation.registerComponent('Settings', () => require('../screen/Settings').default )
    Navigation.registerComponent('Initializing', (sc) => require('../../App').default )
}
