import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity,Image,FlatList,Animated} from 'react-native'
import React,{useState}  from 'react'
import { useEffect } from 'react'

import {icons,images,SIZES,COLORS,FONTS} from '../constants'

export default function Rental({route,navigation}) {
  const [tool, setTool] = useState(null)
  const [currentLocation, setCurrentLocation] = useState(null)

useEffect(() => {
    let {item} = route.params;

    setTool(item)
    setCurrentLocation(currentLocation)
  
  })
  function renderHeader(){
    return (
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{
          width:50,
          paddingLeft:SIZES.padding *2,
          justifyContent:'center'
        }}
        onPress={()=>navigation.goBack()}
        >
          <Image 
            source={icons.back}        
            resizeMode="contain"  
            style={{
              width:30,
              height:30
            }}
          />
        </TouchableOpacity>
        {/*Tool */}
        <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
        }}>
          <View style={{
          height:50,
          alignItems:'center',
          justifyContent:'center',
          paddingHorizontal:SIZES.padding *3 ,
          borderRadius:SIZES.radius,
          backgroundColor:COLORS.lightGray3
          }}>
            <Text style={{...FONTS.h3}}>{tool?.name}</Text>

          </View>

        </View>

      </View>
    )
  }
  function renderToolInfo(){
    return(
      <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      >
        {/*tool?.toolsData.map((item,index)=>(
          <View key={`toolsData-${index}`}
                style={{alignItems:"center"}}
          
          >

          </View>
        ))*/}
        {/*tool image*/}
        <View style={{height:SIZES.height *0.35}}>
          <Image 
            source={tool?.photo}
            resizeMode='cover'
            style={{
              width: SIZES.width,
              height:"100%"
            }}
          />
          {/*name & description */}
          <View style={{
            width:SIZES.width,
            alignItems:'center',
            marginTop:15,
            paddingHorizontal:SIZES.padding *2
          }}>
            <Text style={{marginVertical : 10, textAlign : 'center',...FONTS.h2}}>
              {tool?.name} - {tool?.price}
            </Text>
            <Text style={{...FONTS.h3}}>
              {tool?.description}
            </Text>


          </View>

        </View>


      </Animated.ScrollView>

    )
  }
  function renderOrder(){
    return(
      <View style={{
        backgroundColor:COLORS.white,
        borderTopLeftRadius:40,
        borderTopRightRadius:40

      }}>
        <View 
        style={{
          flexDirection:'row',
          justifyContent:'space-between',
          paddingVertical:SIZES.padding *2,
          paddingHorizontal:SIZES.padding *2,
          borderBottomColor:COLORS.lightGray2,
          borderBottomWidth:1
          
        }}>
          <Text style={{...FONTS.h3}}> Outils dans le panier</Text>
          <Text style={{...FONTS.h3}}> {tool?.price}</Text>
        </View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:SIZES.padding*2,
        paddingHorizontal:SIZES.padding*3,
      }}>
        <View style={{flexDirection:'row'}}>
          <Image
          source={icons.pin}
          resizeMode="contain"
          style={{
            width:20,
            height:20,
            tintColor:COLORS.darkgray
          }}
          />
          <Text style={{marginLeft:SIZES.padding,...FONTS.h4}}>Location</Text>
        </View>
        <View style={{flexDirection:"row"}}>
          <Image 
          source={icons.card}
          resizeMode="contain"
          style={{
            width:20,
            height:20,
            tintColor: COLORS.darkgray
          }}
          />
          <Text style={{ marginLeft:SIZES.padding,...FONTS.h4}}>8888</Text>
        </View>

      </View>
        {/* order Button*/}
        <View style={{
          padding:SIZES.padding *2,
          alignItems:"center",
          justifyContent:"center"
        }}>
          <TouchableOpacity style={{
            width:SIZES.width *0.9,
            padding:SIZES.padding,
            backgroundColor:COLORS.primary,
            alignItems:"center",
            borderRadius:SIZES.radius
          }}
            onPress={()=>navigation.navigate("Location",{
              tool:tool,
              currentLocation:currentLocation
            })}
            >
            <Text style={{color:COLORS.white,...FONTS.h2}}> Order</Text>

          </TouchableOpacity>

        </View>

      </View>
      
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderToolInfo()}
      {renderOrder()}

    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.lightGray2
  }

})