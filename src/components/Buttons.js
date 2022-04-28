import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

const PrimaryButtonActive = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.primaryButtonActive, props.style]}
        >
        <Text style={styles.primaryButtonText} >{props.caption || "Button"}</Text>
        </TouchableOpacity>
    )
};

const PrimaryButtonInactive = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={props.onPress}
            style={[styles.primaryButtonInactive, props.style]}
        >
            <Text style={styles.primaryButtonText} >{props.caption || "Button"}</Text>
        </TouchableOpacity>
    )
};

export { PrimaryButtonActive, PrimaryButtonInactive };

const styles = StyleSheet.create({
    primaryButtonActive: {
        backgroundColor: '#3813A0',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 24,
        borderRadius: 5      
    },
    primaryButtonText: {
        color: 'white'
    },
    primaryButtonInactive: {
        backgroundColor: '#D9D1F2',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 24,
        borderRadius: 5 

    }
})
