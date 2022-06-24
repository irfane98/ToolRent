import { View, Text } from 'react-native'
import React from 'react'
import { FONTS } from '../constants'

export default function Header({
    containerStyle,
    title,
    titleStyle,
    leftComponent,
    rightComponent}) {
  return (
    <View style={{
            height:50,
            flexDirection:'row',    
            ...containerStyle
    }}>
        {leftComponent}
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text style={{...FONTS.h3,...titleStyle}}>{title}</Text>

        </View>
        {rightComponent}
    </View>
  )
}