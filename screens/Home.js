import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity,Image,FlatList } from 'react-native'
import React , {useState} from 'react'

import {icons,images,SIZES,COLORS,FONTS} from '../constants'
import { useSelector } from 'react-redux'

export default function Home({navigation}) {

  // initialLocation
  const initialCurrentLocation = {
    streetName: "Webstart Street",
    gps: {
        latitude: 48.87055,
        longitude: 2.3631643  
    }
}


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
    name: "Motobineuse",
    description: "Motobineuse en perfect etat pour un travail qui demande bcp d'effort physique ",
    price:"30 €/jour",
    categories: [4,4],
    photo: images.motobineuse,
    location: {
        latitude: 48.753554,
        longitude: 2.2959423 },
    },
    {
      id: 2,
      name: "Pince",
      description:" Pince en bonne etat efficace pour couper et tailler les arbres ",
      price:"20 €/jour",
      categories: [2, 4],
      photo: images.pince,
      location: {
          latitude:  48.795056,
          longitude: 2.3027323},
      },
      {
        id: 3,
        name: "Karcher",
        description:"Karcher efficace pour les nettoyages à haute pression",
        price:"10 €/jour",
        categories: [1,5],
        photo: images.karcher,
        location: {
            latitude: 48.8623357,
            longitude: 2.4412184
          },
        },
        {
          id: 4,
          name: "Wagner 2361555",
          description:"Pistolet à peinture murale laque et lasure ",
          price:"12€/jour",
          categories: [1,5],
          photo: images.peinture1,
          location: {
              latitude: 48.847611,
              longitude: 2.3955668
            },
          },
          {
            id: 5,
            name: "Wagner airless ",
            description:"Pistolet peinture Control Pro 350 R pour peintures murales, laques et lasures, et vernis d’intérieur, 15 m² en 2 min, réglage de pression ",
            price:"15€/jour",
            categories: [1,5],
            photo: images.peinture1,
            location: {
                latitude: 48.852613,
                longitude: 2.4061204
              },
            },
            {
              id: 6,
              name: "Tarriere",
              description:"Pourcreuser plus profond qu'avec une simple bêche et donc moins vous fatiguer et moins vous faire au mal au dos. ",
              price:"11€/jour",
              categories: [3,2],
              photo: images.tarriere,
              location: {
                  latitude: 48.8753834,
                  longitude: 2.3968854

                },
              },
              {
                id: 7,
                name: "Nettoyeur à Pression",
                description:"Nettoyeur à haute pression pour tous usage",
                price:"9€/jour",
                categories: [5,5],
                photo: images.nettoyeur,
                location: {
                    latitude: 48.864967,
                    longitude: 2.3583426
  
                  },
                },
       
]


//const authUser=useSelector(state=>state.users)
//console.log(authUser);
/**
 {"token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImY5MGZiMWFlMDQ4YTU0OGZiNjgxYWQ2MDkyYjBiODY5ZWE0NjdhYzYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdG9vbHJlbnQtMzUxODE3IiwiYXVkIjoidG9vbHJlbnQtMzUxODE3IiwiYXV0aF90aW1lIjoxNjU1OTIxMDU4LCJ1c2VyX2lkIjoiMEFBQWFnRVQxaWZ3ajVkV2N5TWNhTmJ5UzhKMiIsInN1YiI6IjBBQUFhZ0VUMWlmd2o1ZFdjeU1jYU5ieVM4SjIiLCJpYXQiOjE2NTU5MjEwNTgsImV4cCI6MTY1NTkyNDY1OCwiZW1haWwiOiJpcmZhbmVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImlyZmFuZUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.blaHuCvhfN2AZ1x0A8ff98DdZPuIJDJwMHkx3TynXLaT0vYV4yZp1qe7NFmXin5s-EM7gaTCPwdsQswVj3lZ8Ds9Mmc4lsok69uwkSVSP3r0w8oP1hKDu6rgqBgf-PcZPIiPd_bP84HsoV19_59leYA0zSJVdcAHX5tWm6XEGYkEr-VO4Ow7rc7TWFZ7ChI1qx1mrnkoexgauf7DUJFLpS_ChYcnDr6z4fPhIsTCeXZkbMe8c71AmYJ9LbH0bsqnweBvGaw-IbWR6LpdyNe6frRbhTDfnCERiSDa28BFKnxB4tjEpfO02zIf81F28U3BABer_eBBhqjgoFtjSaeBWA",
  "userId": "0AAAagET1ifwj5dWcyMcaNbyS8J2"}

 */
const userInfos= useSelector(state =>state.infos)

console.log(userInfos);

const [categories, setCategories] = useState(categoryData)
const [selectedCategory, setSelectedCategory] = useState(null)
const [tools, setTools] = useState(toolsData)
const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)
  function onSelectCategory(category){
    //filter les outils
    let toolsList= toolsData.filter(a => a.categories.includes(category.id))
    setSelectedCategory(category)
    setTools(toolsList)
  }
  function getCategoryNameById(id){
    let category= categories.filter(a => a.id == id)
    if(category.length>0)
      return category[0].name
    return ""

  }
  function renderToolsList(){
    const renderItem =({item}) => (
      <TouchableOpacity style={{
        marginBottom:SIZES.padding *2 }}
        onPress={()=>navigation.navigate("Rental", {item,currentLocation}
        )}
      >
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
            {/*categories*/}
          <View style={{
            flexDirection:'row',
            marginLeft:10
          }}>
            {/*
              item.categories.map((categoryId)=>{
                return(
                  <View
                  style={{flexDirection:'row'}}
                  key={categoryId}>
                    <Text>
                    {getCategoryNameById(categoryId)}

                    </Text>
                  
                  </View>
                )
              })*/
            }

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
