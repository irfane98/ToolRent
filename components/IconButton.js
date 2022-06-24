import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

export default function IconButton({
    containerStyle,
    icon,
    iconStyle,
    onPress
     }) {
  return (
    <TouchableOpacity style={{
        ...containerStyle
    }}
    onPress={onPress}>
        <Image
            source={icon}
            style={{
                width:30,
                height:30,
                tintColor:COLORS.white,
                ...iconStyle

            }}
        />

    </TouchableOpacity>
  )
}