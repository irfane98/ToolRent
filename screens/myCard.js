import { View, Text,Image,ImageBackground } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {FONTS,SIZES,icons,images,COLORS} from "../constants"
import {utils} from "../utils"
import { Header, IconButton } from '../components'

export default function myCard({navigation,route}) {
    function renderHeader(){
        return(
            <Header
                title='Paiement'
                containerStyle={{
                    height:50,
                    marginHorizontal:SIZES.padding2,
                    marginTop:10
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width:40,
                            height:40,
                            justifyContent:'center',
                            alignItems:'center',
                            borderWidth:1,
                            borderRadius:SIZES.radius,
                            
                        }}
                        iconStyle={{
                            width:20,
                            height:20,
                            tintColor:COLORS.black
                        }}
                        onPress={()=>navigation.goBack()}
                    
                    
                    />
                }
            
            />
        )
    }

  return (
    <View style={{
        flex:1,
        backgroundColor:COLORS.white
    }}>
        {/*header*/}
        {renderHeader()}
        {/*body*/}
        {/*footer*/}
        </View>
  )
}