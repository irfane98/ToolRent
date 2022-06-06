import { View, Text, Image } from 'react-native'
import React from 'react'
import {icons,images,SIZES,COLORS,FONTS} from '../constants'


export default function AuthLayout({title,subtitle,titleContainerStyle,children}) {
  return (
    <View style={{
                flex:1,
                paddingVertical:SIZES.padding,
                backgroundColor:COLORS.white,
                }}>
      <Text>{title}</Text>
    </View>
  )
}