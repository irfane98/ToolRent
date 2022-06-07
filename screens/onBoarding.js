import { View, Text,Image,ImageBackground,Animated,} from 'react-native'
import React from 'react'
import {icons,images,SIZES,COLORS,FONTS,constants} from '../constants'
import { TextButton } from '../components'

export default function onBoarding({navigation}) {

  const scrollX= React.useRef(new Animated.Value(0)).current
  const flatListRef=React.useRef()

  const [currentIndex, setcurrentIndex] = React.useState(0)

  const onViewChangeRef = React.useRef(({viewableItems,changed})=>{
    setcurrentIndex(viewableItems[0].index)

  })

  const Dots = () =>{
    const dotPosition=Animated.divide(scrollX,SIZES.width)
    return(
      <View
      style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      }}>
        {
          constants.onboarding_screens.map((item,index)=>{
            const dotColor = dotPosition.interpolate({
              inputRange:[index -1 , index,index+1],
              outputRange:[COLORS.lightGray,COLORS.primary,COLORS.lightGray],
              extrapolate:"clamp"
            })
            const dotWidht = dotPosition.interpolate({
              inputRange:[index -1 , index,index+1],
              outputRange:[10,30,10],
              extrapolate:"clamp"
            })
            return(
              <Animated.View
                  key={`dot-${index}`}
                  style={{
                    borderRadius:5,
                    marginHorizontal:6,
                    width:dotWidht,
                    height:10,
                    backgroundColor:dotColor
                  }}
              
              />

            )
          })
        }

      </View>
    )
  }

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
  function renderFooter(){
    return(
      <View style={{
        height:100
      }}>
        {/*pagintions /Dots*/}
        <View style={{
          flex:1,
          justifyContent:'center'
        }}>
          <Dots/>

          
        </View>
        {/*Buttons*/}
        {currentIndex<constants.onboarding_screens.length -1  &&
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          paddingHorizontal : SIZES.padding,
          marginVertical:SIZES.padding
        }}>
          <TextButton 
                label='Passer' 
                buttonContainerStyle={{
                  backgroundColor:null
                }}
                labelStyle={{
                  color:COLORS.darkgray
                }}
                onPress={()=> navigation.replace("SignIn")}
          />
          <TextButton 
                label='Suivant' 
                buttonContainerStyle={{
                  height : 52,
                  width:150,
                  borderRadius:SIZES.radius
                }}
                onPress={()=>{
                 
                    //scroll au suivant
                    flatListRef?.current?.scrollToIndex({
                      index:currentIndex +1,
                      Animated:true
                    })
                }}
          />
        </View>
        }
        {currentIndex== constants.onboarding_screens.length-1 &&
          <View style={{
            paddingHorizontal:SIZES.padding,
            marginVertical:SIZES.padding
          }}>
            <TextButton 
                    label="Commençons 👍 "
                    buttonContainerStyle={{
                      height:60,
                      borderRadius:SIZES.radius
                    }}
                    onPress={()=> navigation.replace("SignIn")}
            />
          </View>
        
        }

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
    ref={flatListRef}
    horizontal
    pagingEnabled
    data={constants.onboarding_screens}
    scrollEventThrottle={16}
    snapToAlignment="center"
    showsHorizontalScrollIndicator={false}
    onScroll={Animated.event(
      [
        {nativeEvent:{contentOffset:{x:scrollX}
      }}
      ],
      {useNativeDriver:false}
    )}
    onViewableItemsChanged={onViewChangeRef.current}
    keyExtractor={(item =>`${item.id}`)}
    renderItem={({item,index})=>{
      return(
        <View
            style={{
              width:SIZES.width
            }}
        >
          {/*Header*/}
          <View style={{flex:3}}>
            <ImageBackground 
                source={item.backgroundImage}
                style={{
                  flex:1,
                  alignItems:"center",
                  justifyContent:'flex-end',
                  height: "100%",
                  width:"100%"
                }}
            >

              <Image 
                  source={item.bannerImage}
                  resizeMode='contain'
                  style={{
                    width:SIZES.width *0.8,
                    height:SIZES.height,
                    marginBottom: -SIZES.padding *12
                  }}

              />
            </ImageBackground>
          </View>

           {/*details*/}
           <View style={{
             flex:1,
             marginTop:30,
             alignItems:'center',
             justifyContent:'center',
             paddingHorizontal:SIZES.radius
           }}>
             <Text style={{...FONTS.h1,fontSize:25}}>
               {item.title }
             </Text>
             <Text style={{
                      marginTop:SIZES.radius,
                      textAlign:'center',
                      color: COLORS.darkgray,
                      paddingHorizontal:SIZES.padding,
                      ...FONTS.body3
             }}>
               {item.description}

             </Text>
          </View>

        </View>
      )
    }}
    
    />
    {renderFooter()}
    </View>
  )
}