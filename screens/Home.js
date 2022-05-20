import React from 'react'
import { 
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
    View,
    Text } from 'react-native'
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod'
import { SIZES,icons,images,COLORS,FONTS } from '../constants'
  
  

export default function Home() {
  function renderHeader(){
    <View style={{flexDirection :'row', height : 50}}>
      <TouchableOpacity style = {{
        width : 50,
        paddingLeft : SIZES.padding *2,
        justifyContent : 'center'
      }}
      >
        <Image
        source={icons.avatar}
        resizeMode="contain"
        style = {{
          width:30,
          height:30
        }}
        />
      </TouchableOpacity>
      <View style={{flex :1 ,alignItems :'center' , justifyContent : 'content'}}>
        <View>
          <Text style={{...FONTS.h2}}></Text>
        </View>

      </View>
    </View>
  }
  return (
   <SafeAreaView style={styles.container}>
     {renderHeader()}

   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{

  }

})