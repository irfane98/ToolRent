import { View, Text,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import MapView , {PROVIDER_GOOGLE,Marker} from 'react-native-maps'

import {icons,images,SIZES,COLORS,FONTS,constants,GOOGLE_API_KEY} from '../constants'

export default function location({route,navigation}) {

  const [tool, setTool] = React.useState(null)
  const [streetName, setStreetName] = React.useState("")
  const [fromLocation, setFromLocation] = React.useState(null)
  const [toLocation, setToLocation] = React.useState(null)
  const [region, setRegion] = React.useState(null)

  React.useEffect(() => { 
    let {tool,currentLocation} = route.params;

    let fromLoc=currentLocation.gps
    let toLoc =tool.location
    let street=currentLocation.streetName

    let mapRegion={
      latitude : (fromLoc.latitude + toLoc.latitude) /2,
      longitude : (fromLoc.longitude + toLoc.longitude)/2,
      latitudeDelta:Math.abs(fromLoc.latitude - toLoc.latitude) * 2 ,
      longitudeDelta : Math.abs(fromLoc.longitude - toLoc.longitude) * 2
    }

    setTool(tool)
    setStreetName(street)
    setFromLocation(fromLoc)
    setToLocation(toLoc)
    setRegion(mapRegion)

  }, [])
  

  function renderMap(){

    const pinIcon=()=>(
      <Marker
        coordinate={fromLocation}
        anchor={{x:0.5,y:0.5}}
        flat={true}
      >
        <Image
          source={icons.pin2}
          style={{
            width:40,
            height:40
          }}
        
        />

      </Marker>
    )

    const destinationMarker = () =>(
      <Marker
      
        coordinate={toLocation}
      >
        <View style={{
          height:40,
          width:40,
          borderRadius:20,
          alignContent:'center',
          justifyContent:'center',
          backgroundColor:COLORS.white
        }}>
          <View style={{
            height:40,
            width:40,
            borderRadius:15,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:COLORS.primary
          }}>
            <Image 
              source={icons.tools}
              style={{
                height:25,
                width:25,
              }}
            />

          </View>

        </View>
      </Marker>
    )
    return(
      <View style={{flex:1}}>
        <MapView 
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          style={{flex:1}}
        >
          {destinationMarker()}
          {pinIcon()}

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