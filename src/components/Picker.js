import { View, Text } from 'react-native'
import React from 'react'
import {Picker} from '@react-native-picker/picker';

const LanguagePicker = (props) => {
    return (
        <Picker
            dropdownIconColor={props.dropdownIconColor}
            mode={props.mode}
            onValueChange={props.onValueChange}
            // ref={props.ref}
            selectedValue={props.selectedValue}
        >
            <Picker.Item label={props.pickerCaption} enabled={false} value="" color='#C2C1C5' />
            {props.renderPicker}

        </Picker>
    )
}

export { LanguagePicker, }
