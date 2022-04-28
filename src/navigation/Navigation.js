import { Navigation } from 'react-native-navigation'
import HomeIcon from '../../assets/images/home_icon.png'

const goToAuth = () => Navigation.setRoot({
    root: {
        bottomTabs: {
            id: 'BottomTabsId',
            children: [
                {
                    component: {
                        name: 'Home',
                        options: {
                            bottomTab: {
                                fontSize: 12,
                                text: 'Home',
                                icon: require('../../assets/images/home_icon.png'),
                                iconColor: "blue",
                                selectedIconColor: "yellow",
                            }
                        }
                    },
                },
                {
                    component: {
                        name: 'Settings',
                        options: {
                            bottomTab: {
                                text: 'Sign Up',
                                fontSize: 12,
                                icon: require('../../assets/images/signUp.png')
                            }
                        }
                    },
                },
                {
                    component: {
                        name: 'Wallet',
                        options: {
                            bottomTab: {
                                text: 'Wallet',
                                fontSize: 12,
                                icon: require('../../assets/images/wallet_icon.png')
                            }
                        }
                    },
                },
            ],
        }
    }
});

const goHome = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'Home',
            children: [
                {
                    component: {
                    name: 'Home',
                    }
                }
            ],
        }
    }
})

export { goHome, goToAuth } 
