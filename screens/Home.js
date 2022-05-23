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
const toolsData=[
  {
    id: 1,
    name: "motobineuse",
    price:"30 €/jour",
    rating: 4.8,
    categories: [1, 3],
    photo: images.motobineuse,
    duration: "30 - 45 min",
    location: {
        latitude: 1.5347282806345879},
    },
    {
      id: 2,
      name: "pince",
      price:"20 €/jour",
      rating: 4.4,
      categories: [2, 4],
      photo: images.pince,
      duration: "30 - 45 min",
      location: {
          latitude: 1.5347282806345879},
      },
      {
        id: 3,
        name: "karcher",
        price:"10 €/jour",
        rating: 4.8,
        categories: [1,5],
        photo: images.karcher,
        duration: "30 - 45 min",
        location: {
            latitude: 1.5347282806345879},
        },
       
]




const [categories, setCategories] = useState(categoryData)
const [selectedCategory, setSelectedCategory] = useState(null)
const [tools, settools] = useState(toolsData)
  function onSelectCategory(category){
    //filter les outils
    let toolsList= toolsData.filter(a => a.categories.includes(category.id))
    setSelectedCategory(category)
  }
  function renderToolsList(){
    const renderItem =({item}) => (
      <TouchableOpacity style={{
        marginBottom:SIZES.padding *2 
        //onPress=> navigate to  Tool Screen 
      }}>
        {/*Image*/}

        <View style= {{marginBottom : SIZES.padding}}>
          <Image 
          source={item.photo}
          resizeMode='cover'
          style={{
            width:"100%",
            height:200,
            borderRadius : SIZES.radius
          }}

          />
          <View style={{
            position:'absolute',
            bottom : 0,
            height:50,
            width : SIZES.width *0.3,
            backgroundColor:COLORS.primary,
            borderTopRightRadius:SIZES.radius,
            borderTopLeftRadius:SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            ...styles.shadow
          }}>
            <Text style={{...FONTS.h4}}>{item.price}</Text>

          </View>

        </View>
        <Text style={{...FONTS.body2}}>{item.name}</Text>


      </TouchableOpacity>
    )
return(

  <FlatList 
    data={tools}
    keyExtractor={item =>`${item.id}`}
    renderItem={renderItem}
    contentContainerStyle={{
      paddingHorizontal:SIZES.padding *2,
      paddingBottom: 30

    }}
  />
)

  }
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
          backgroundColor: (selectedCategory?.id==item.id) ? COLORS.primary:  COLORS.lightGray,
          borderRadius : SIZES.radius,
          alignItems:'center',
          justifyContent:'center',
          marginRight : SIZES.padding,
          ...styles.shadow
        }}
          onPress={()=> onSelectCategory(item)}
        >
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
          <Text>
            {item.name}
          </Text>
 
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
      {renderToolsList()}

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