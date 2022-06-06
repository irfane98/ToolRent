import { View, Text,Image,ImageBackground,Animated,} from 'react-native'
import React from 'react'
import {icons,images,SIZES,COLORS,FONTS} from '../constants'

export default function onBoarding() {

  function renderHeaderLogo(){
    return (
      <View style={{
          position:'absolute',
          top:SIZES.height > 800? 50: 22,
          left:0,
          right:0,
          alignItems:'center',
          justifyContent : 'center'
      }}>
        <Image 
            source={images.logo2}
            resizeMode='contain'      
            style={{ 
              marginTop:-100,     
              width:SIZES.width * 2,
              height:200
            }}
              
        />

      </View>
    )
  }
  
  return (
    <View style={{
        flex:1,
        backgroundColor:COLORS.white
    }}>
    {renderHeaderLogo()}      
    <Animated.FlatList 
    
    />
    </View>
  )
}