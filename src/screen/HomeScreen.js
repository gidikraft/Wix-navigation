import { Button, Image, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, TouchableHighlight, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { goToAuth, goHome } from './navigation';
import { Navigation } from 'react-native-navigation';
import {Picker} from '@react-native-picker/picker';
import ModalSelector from 'react-native-modal-selector';
import LanguagePicker from '../components/Picker';
import { PrimaryButtonActive, PrimaryButtonInactive } from '../components/Buttons';
import BgImage from '../../assets/images/tribapay_onboarding_bg.png'
import HeaderLogo from '../../assets/images/tribapay_header_logo.png'
import { Colors } from 'react-native/Libraries/NewAppScreen';


const HomeScreen = (props) => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [languageInput, setLanguageInput] = useState('');
    
    let index = 0;
    const data = [
        { key: index++, section: true, label: 'Fruits' },
        { key: index++, label: 'Red Apples' },
        { key: index++, label: 'Cherries' },
        { key: index++, label: 'Cranberries', accessibilityLabel: 'Tap here for cranberries' },
        // etc...
        // Can also add additional custom keys which are passed to the onChange callback
        { key: index++, label: 'Vegetable', customKey: 'Not a fruit' }
    ];

    const languageList = [
        {
            key: index++,
            label: 'English',
            stateValue: 'english',
            accessibilityLabel: 'Tap here for english',
            // section: true,
        },
        {
            key: index++,
            label: 'Hausa',
            stateValue: 'hausa',
            accessibilityLabel: 'Tap here for hausa',
        },
        {
            key: index++,
            label: 'Igbo',
            stateValue: 'igbo',
            accessibilityLabel: 'Tap here for igbo',
        },
        {
            key: index++,
            label: 'Edo',
            stateValue: 'edo',
            accessibilityLabel: 'Tap here for edo',
        },
        {
            key: index++,
            label: 'Fulani',
            stateValue: 'fulani',
            accessibilityLabel: 'Tap here for fulani',
        },
        {
            key: index++,
            label: 'Yoruba',
            stateValue: 'yoruba',
            accessibilityLabel: 'Tap here for yoruba',
        },
    ]
    
    const goToSettings = () => {
        Navigation.push(props.componentId, {
            component: {
                name: 'Settings',
                // id: 'PROFILE_SCREEN_ID',
                passProps: {
                  name: 'John Doe',
                  status: 'online',
                  count: 0,
                }
            }
        })
    };

    const renderPicker = () => {
        return languageList.map((state, index) => {
            return <Picker.Item key={index} label={state.label} value={state.stateValue} style={{fontSize: 18}}/>
        })
    };

    return (
        <ImageBackground 
            source={BgImage}
            style={styles.root}
        >
            <SafeAreaView>
                
                {/* <Button 
                    title="Wix It" 
                    onPress={goToSettings}
                ></Button> */}
                <View style={styles.topSheet}>
                    <Image
                        source={HeaderLogo}
                        style={styles.headerIcon}
                    />
                    
                    <Text style={styles.welcome}>Welcome on board</Text>

                </View>

                {/* <View style={styles.bottomSheet} ></View> */}

                <View style={styles.bottomSheet} >
                    <Text style={styles.chooseLanguage}>Choose A Language</Text>

                    <Text style={styles.body}>Select a language you are comfortable with</Text>

                    <Text style={styles.label}>Language</Text>

                    <View style={styles.pickerContainer} >
                        <LanguagePicker
                            dropdownIconColor='#67656E'
                            mode='dropdown'
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemPosition) =>
                                setSelectedLanguage(itemValue)
                            }
                            pickerCaption="Choose Language"
                            renderPicker={renderPicker()}
                        />
                    </View>
                    {selectedLanguage === ''? (
                        <PrimaryButtonInactive style={styles.button} caption={"Continue"}/>
                        ): (
                        <PrimaryButtonActive style={styles.button} caption={"Continue"}/>
                        )
                    }
                    
                    
                    <ModalSelector
                        data={languageList}
                        initValue="Choose language!"
                        onChange={(option)=>{ console.log(`${option.label} (${option.key}) nom nom nom`) }} 
                    />

                    <ModalSelector
                    data={languageList}
                    initValue="Choose language!"
                    supportedOrientations={['landscape']}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(option)=>{ setLanguageInput({languageInput: option.label})}}>

                    <TextInput
                        style={{borderWidth:1, borderColor:'#ccc', padding:10 }}
                        editable={false}
                        placeholder="Choose language!"
                        value={languageInput} />

                    </ModalSelector>

                </View>

            </SafeAreaView>

        </ImageBackground>
    )
}
HomeScreen.options = {
    topBar: {
        // title: {
        //     text: 'Home'
        // },
        visible: false
    },
};

export default HomeScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'whitesmoke'
    },
    button: {
        marginTop: 40,
        marginHorizontal: 24
    },
    pickerContainer: {
        borderColor: "#A18BDF",
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 24,
        // marginTop: 20,
        height: 50,
        justifyContent: 'center'
    },
    headerIcon: {
        marginTop: 130,
        marginHorizontal: 24,
    },
    welcome: {
        fontSize: 40,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#220C60',
        marginTop: 80,
        marginHorizontal: 24,
    },
    topSheet: {
        height: "50%",
    },
    bottomSheet: {
        // flexGrow: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
        // marginTop: 20,
        height: "50%",
        width: '100%',
        elevation: 10,
    },
    chooseLanguage: {
        fontSize: 22,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#220C60',
        marginTop: 50,
        marginLeft: 24,
        
    },
    body: {
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'normal',
        color: '#525254',
        marginTop: 8,
        marginLeft: 24,

    },
    label:{
        // fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
        color: '#220C60',
        marginTop: 24,
        marginBottom: 4,
        marginLeft: 24,

    }

})
