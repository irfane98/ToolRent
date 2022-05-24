import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity,Image,FlatList,Animated} from 'react-native'
import React,{useState,useEffect} from 'react'

import {icons,images,SIZES,COLORS,FONTS} from '../constants'

export default function Rental({route}) {
  const [tool, setTool] = useState(null)
  const [currentLocation, setCurrentLocation] = useState(null)

  useEffect(() => {
    let {item} = route.params;

    setTool(item)
    setCurrentLocation(currentLocation)
  
    return () => {
      second
    }
  }, [third])
  

  return (
    <View>
      <Text>Rental</Text>
    </View>
  )
}