import { View, Text,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import MapView , {PROVIDER_GOOGLE,Marker} from 'react-native-maps'

export default function location() {
  function renderMap(){
    return(
      <View style={{flex:1}}>
        <MapView 
          style={{flex:1}}
        >

        </MapView>
        
      </View>
    )
  }    
  return (
    <View style={{flex:1}}>
      {renderMap()}
    </View>
  )
}