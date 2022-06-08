import { View, Text } from 'react-native'
import React from 'react'
import {AuthLayout} from '../'


import { FONTS,COLORS,SIZES,icons } from '../../constants';

import { FormInput,TextButton, TextIconButton } from '../../components';
import OTPInputView from '@twotalltotems/react-native-otp-input'

export default function Otp({navigation}) {

    const [timer, setTimer] = React.useState(60)
// hook useEffect pourcompte à reboures
    React.useEffect(()=>{
        let interval = setInterval(()=>{
            setTimer(prevTimer=>{
                if(prevTimer>0){
                    return prevTimer -1
                }else{
                    return prevTimer
                }
            })
        },1000)
        return ()=> clearInterval(interval)
    },[])

  return (
    <AuthLayout
        title="Otp authentification"
        subtitle="Un code d'authentification vous a été envoyé"
        titleContainerStyle={{
            marginTop:24,
             
        }}
    >
        {/*OTP input  */}
        <View style={{
            flex:1,
            marginTop:48
        }}>
            <OTPInputView
                pinCount={4}
                style={{
                    width:"100%",
                    height:50
                }}
                codeInputFieldStyle={{
                    width :65,
                    height:65,
                    borderRadius:SIZES.radius,
                    backgroundColor:COLORS.lightGray2,
                    color:COLORS.black,
                    ...FONTS.h3
                }}
                onCodeFilled={(code)=>{
                    console.log(code)
                }}
            />
            {/* counter time */}
            <View
            style={{
                flexDirection:"row",
                justifyContent:'center',
                marginTop:24
            }}>
                <Text style={{ color: COLORS.darkgray, ...FONTS.body3}}>
                    Pas encore reçu le code ?
                </Text>
                <TextButton 
                    label={`Renvoi dans (${timer}s)`}
                    disabled={timer ==0? false :true}
                    buttonContainerStyle={{
                        marginLeft:SIZES.base,
                        backgroundColor : null
                    }}
                    labelStyle={{
                        color:COLORS.primary,
                        ...FONTS.h4
                        
                    }}
                    onPress={()=> setTimer(60)}
                />

            </View>
        </View>
        {/*Footer*/}
        <View>
            <TextButton
            label="Continue"
            buttonContainerStyle={{
                height:50,
                alignItems:'center',
                borderRadius:SIZES.radius,
                backgroundColor:COLORS.primary
            }}
            onPress={()=>navigation.navigate("Home")}
            />
            <View style={{
                marginTop:24,
                alignItems:"center"
            }}>
                <Text style={{
                    color:COLORS.darkgray,
                    ...FONTS.body4
                }}>
                    En vous inscrivant, vous acceptez nos.
                </Text>
                <TextButton
                    label="Termes et Conditions d'utilisations"
                    buttonContainerStyle={{
                        backgroundColor:null
                    }}
                    labelStyle={{
                        color:COLORS.primary,
                        ...FONTS.body4
                    }}
                    onPress={()=>console.log("les termes et conditions d'utilisations")}
                />

            </View>
        </View>
    </AuthLayout>
  )
}