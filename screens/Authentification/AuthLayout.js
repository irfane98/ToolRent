import { View, Text, Image } from 'react-native'
import React from 'react'
import {icons,images,SIZES,COLORS,FONTS} from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function AuthLayout({title,subtitle,titleContainerStyle,children}) {
  return (
    <View style={{
                flex:1,
                paddingVertical:SIZES.padding,
                backgroundColor:COLORS.white,
                }}
    >
    <KeyboardAwareScrollView 
      keyboardDismissMode='on-drag'
      contentContainerStyle={{
        flex:1,
        paddingHorizontal:SIZES.padding
      }}
    >


     {/*app icon*/}
     <View style={{
          alignItems:'center'
     }}
     >
       <Image 
          source={images.logo2}
          resizeMode='contain'
          style={{
            marginTop:-50,
            height:150,
            width:200
          }}
       />

     </View>
     {/*title & subtitle*/}
     <View style={{
       marginTop:-20,
       ...titleContainerStyle
     }}>
      <Text style={{
         textAlign:'center',
         ...FONTS.h2
       }}>
         {title}
      </Text>
      <Text style={{
        textAlign:'center',
        color:COLORS.darkgray,
        marginTop:SIZES.base,
        ...FONTS.body3
      }}>
        {subtitle}

      </Text>
     </View>
     {/*children*/}
     {children}
    </KeyboardAwareScrollView>
    </View>
  )
}