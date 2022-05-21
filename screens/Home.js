import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity,Image,FlatList } from 'react-native'
import React , {useState} from 'react'

import {icons,images,SIZES,COLORS,FONTS} from '../constants'
export default function Home() {

  // date categories 
  const categoryData = [
    {
        id: 1,
        name: "Peinture",
        icon: icons.painting,
    },
    {
        id: 2,
        name: "Bricologe",
        icon: icons.drilling,
    },
    {
        id: 3,
        name: "Plomberie",
        icon: icons.plumbing,
    },
    {
        id: 4,
        name: "Jardinnage",
        icon: icons.gardening,
    },
    {
        id: 5,
        name: "Nettoyage",
        icon: icons.cleanning,
    },
   
]



const [categories, setCategories] = useState(categoryData)
const [selectedCategory, setSelectedCategory] = useState(null)

  function renderHeader() {
    return (

      <View style={{flexDirection :'row',height : 50}}>
        <View style ={{flex:1,alignItems:'center' ,justifyContent:'center'}}>
         
            <Text style={{...FONTS.h3}}>TOOLRENT</Text>
         

        </View>
        <TouchableOpacity 
          style={{
            width:50,
            paddingRight : SIZES.padding * 2,
            justifyContent:'center',

          }}>
            <Image
                source={icons.basket}
                resizeMode = 'contain'
                style={{
                  width : 30,
                  height : 30
                }}
            />

        </TouchableOpacity>

      </View>
    )

    
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor : COLORS.lightGray4
  },
  shadow : {
    shadowColor:"#000",
    shadowOffset :{
      width:0,
      height:3,
    },
    shadowOpacity:0.1,
    shadowRadius:3,
    elevation :1
  }
})