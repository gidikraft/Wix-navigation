import { Button, StyleSheet, Text, SafeAreaView, View, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react';
import { NavigationComponent, Modal as RNNModal } from 'react-native-navigation';
import { Navigation } from 'react-native-navigation';

const Settings = (props) => {

    const [modalVisible, setModelVisible] = useState(false);
    const toggleModal = () => setModelVisible(!modalVisible);

    const WixModal = () => (
        <RNNModal
            onShow={console.log("Wix modal")}
            animationType={'fade'/* optional, 'none' | 'fade' | 'slide', default 'slide'*/}
            // blurOnUnmount={/* optional, default false */}
            // transparent={/* optional, default false, true behaves as overCurrentContext */}
            visible={modalVisible}
            onRequestClose={() => setModelVisible(false)}
        >
            {/* <Button
                label="Dismiss declared Modal"
                // testID={DISMISS_MODAL_BTN}
                onPress={toggleModal}
            /> */}
            <Button title="Dismiss declared Modal" onPress={toggleModal}></Button>
        </RNNModal>
    )

    const goToHome = () => {
        Navigation.push(props.componentId, {
            component: {
                name: 'Home',
            }
        })
    };

    return (
        <SafeAreaView>
            <Text onPress={goToHome} >Settings</Text>
            <WixModal />
        </SafeAreaView>
    )
}

export default Settings

const styles = StyleSheet.create({})