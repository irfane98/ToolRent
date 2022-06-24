import { View, Text,Image,TouchableOpacity} from 'react-native'
import React,{useEffect,useRef} from 'react'
import MapView , {PROVIDER_GOOGLE,Marker} from 'react-native-maps'

import {icons,images,SIZES,COLORS,FONTS,constants,GOOGLE_API_KEY} from '../constants'
import MapViewDirections from 'react-native-maps-directions'

export default function location({route,navigation}) {
  const mapView = useRef()

  const [tool, setTool] = React.useState(null)
  const [streetName, setStreetName] = React.useState("")
  const [fromLocation, setFromLocation] = React.useState(null)
  const [toLocation, setToLocation] = React.useState(null)
  const [region, setRegion] = React.useState(null)

useEffect(() => { 
  if(route?.params?.tool && route?.params?.currentLocation){
    const {tool} = route.params
    setTool(tool)
  
    let {currentLocation} = route.params
    let fromLoc=currentLocation.gps
    let toLoc =tool.location
    let street=currentLocation.streetName

    let mapRegion={
      latitude : (fromLoc.latitude + toLoc.latitude) /2,
      longitude : (fromLoc.longitude + toLoc.longitude)/2,
      latitudeDelta:Math.abs(fromLoc.latitude - toLoc.latitude) * 2 ,
      longitudeDelta : Math.abs(fromLoc.longitude - toLoc.longitude) * 2
    }

    
    setStreetName(street)
    setFromLocation(fromLoc)
    setToLocation(toLoc)
    setRegion(mapRegion)
  }

  }, [])
  function zoomIn() {
    let newRegion = {
        latitude: region.latitude,
        longitude: region.longitude,
        latitudeDelta: region.latitudeDelta / 2,
        longitudeDelta: region.longitudeDelta / 2
    }

    setRegion(newRegion)
    mapView.current.animateToRegion(newRegion, 200)
}

function zoomOut() {
    let newRegion = {
        latitude: region.latitude,
        longitude: region.longitude,
        latitudeDelta: region.latitudeDelta * 2,
        longitudeDelta: region.longitudeDelta * 2
    }

    setRegion(newRegion)
    mapView.current.animateToRegion(newRegion, 200)
}
  

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
            borderRadius:10,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:COLORS.primary
          }}>
            <Image 
              source={icons.tools}
              style={{
                height:30,
                width:30,
              }}
            />

          </View>

        </View>
      </Marker>
    )
    return(
      <View style={{flex:1}}>
        <MapView 
          ref={mapView}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          style={{flex:1}}
        >
          <MapViewDirections
              origin={fromLocation}
              destination={toLocation}
              apikey={GOOGLE_API_KEY}
              strokeWidth={5}
              strokeColor={COLORS.secondary}
              optimizeWaypoints={true}
          />
          {destinationMarker()}
          {pinIcon()}

        </MapView>
        <View style={{}}>

        </View>
        
      </View>
    )
  }    
  function renderDestinationHeader(){
    return(
      <View style={{
          position:"absolute",
          top:50,
          left:0,
          right:0,
          height:50,
          alignItems:'center',
          justifyContent:'center'
      }}>
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            width:SIZES.width *0.9,
            height:SIZES.height * 0.05,
            paddingVertical:SIZES.padding,
            paddingHorizontal:SIZES.padding *2,
            borderRadius:SIZES.radius,
            marginTop:-30,
            backgroundColor:COLORS.white
            }}>
              <Image 
                  source={icons.pin2}
                  style={{
                    width:25,
                    height:25,
                    marginRight:SIZES.padding
                  }}
              />
              <View style={{flex:1}}>
                <Text style={{
                  ...FONTS.body4
                }}>{streetName}</Text>

              </View>

        </View>

      </View>
    )
  }
  function renderToolInfo() {
    return (
        <View
            style={{
                position: 'absolute',
                bottom: 50,
                left: 0,
                right: 0,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <View
                style={{
                    width: SIZES.width * 0.9,
                    paddingVertical: SIZES.padding * 3,
                    paddingHorizontal: SIZES.padding * 2,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={tool?.photo}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25
                        }}
                    />

                    <View style={{ flex: 1, marginLeft: SIZES.padding }}>
            

                        {/* Tool */}
                        <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{tool?.name}</Text>
                    </View>
                </View>

                {/* Buttons */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding * 2,
                        justifyContent: 'space-between'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            height: 50,
                            marginRight: 10,
                            backgroundColor: COLORS.primary,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10
                        }}
                        onPress={() => navigation.navigate('myCard')}
                    >
                        <Text style={{ ...FONTS.h4, color: COLORS.white }}>Payer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flex: 1,
                            height: 50,
                            backgroundColor: COLORS.secondary,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10
                        }}
                        onPress={() => {}}
                    >
                        <Text style={{ ...FONTS.h4, color: COLORS.white }}>Message</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

  function renderButtons() {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: SIZES.height * 0.35,
                    right: SIZES.padding * 2,
                    width: 60,
                    height: 130,
                    justifyContent: 'space-between'
                }}
            >
                {/* Zoom In */}
                <TouchableOpacity
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: COLORS.white,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => zoomIn()}
                >
                    <Text style={{ ...FONTS.body1 }}>+</Text>
                </TouchableOpacity>

                {/* Zoom Out */}
                <TouchableOpacity
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: COLORS.white,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => zoomOut()}
                >
                    <Text style={{ ...FONTS.body1 }}>-</Text>
                </TouchableOpacity>
            </View>

        )
    }

  return (
    <View style={{flex:1}}>
      {renderMap()}
      {renderDestinationHeader()}
      {renderToolInfo()}
      {renderButtons()}
    </View>
  )
}