import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity,Image,FlatList } from 'react-native'
import React , {useState} from 'react'

import {icons,images,SIZES,COLORS,FONTS} from '../constants'
export default function Home() {

  // data categories 
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
//data tools




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
  function renderCategories(){
    const renderItem = ({item}) =>{
      return(
        <TouchableOpacity style={{
          padding : SIZES.padding,
          paddingBottom:SIZES.padding * 2,
          backgroundColor: COLORS.lightGray,
          borderRadius : SIZES.radius,
          alignItems:'center',
          justifyContent:'center',
          marginRight : SIZES.padding,
          ...styles.shadow
        }}>
          <View
          style={{
            width:50,
            height:50,
            borderRadius:25,
            alignItems :'center',
            justifyContent : 'center',
            
          }}
          >
            <Image 
              source={item.icon}
              resizeMode='contain'
              style={{
                width:30,
                height:30
              }}
            />

          </View>
 
        </TouchableOpacity>
      )
      
    }
    return(
      <View style={{padding:SIZES.padding}}>
        <Text>Categories</Text>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item =>`${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical:SIZES.padding * 2}}

        />
      </View>

    )
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderCategories()}

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