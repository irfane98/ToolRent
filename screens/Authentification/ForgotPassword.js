import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {AuthLayout} from '../'


import { FONTS,COLORS,SIZES,icons } from '../../constants';
import { FormInput,TextButton, TextIconButton } from '../../components';
import { utils } from '../../utils';


export default function ForgotPassword({navigation}) {

  const [email, setEmail] = React.useState("")
  const [emailError, setEmailError] = React.useState("")

  function isEnableSendEmail(){
    return email != "" && emailError==""
  }
  return (
    <AuthLayout
        title="Recuperez votre mot de passe !"
        subtitle="Entrez votre adresse e-mail pour recuperez votre mot de passe "
        titleContainerStyle={{
          marginTop:24,
        }}
    >
      {/* form input */}
      <View style={{
        flex:1,
        margnTop : 48
      }}>
        <FormInput 
            label="Email"
            keyboardType='email-adress'
            autoCompleteType='email'
            onChange={(value)=>{
              //validate email 
              utils.validateEmail(value,setEmailError)
              setEmail(value)
            }}
            errorMsg={emailError}
            appendComponent={
          <View style={{
                  justifyContent:'center'
              }}>
                <Image 
                source={email==""||(email !="" && emailError=="") ? icons.correct :icons.cancel}
                style={{
                  height:20,
                  width:20,
                  tintColor:email ==""?COLORS.gray :(email!="" && emailError =="")?"green":"red"
                  
                }}
                
            />
              </View>
            }

       />

      </View>
      {/* Button*/}
      <TextButton 
      label="Envoyer l'email"
      disabled={isEnableSendEmail()? false : true}
      buttonContainerStyle={{
        height:55,
        alignItems:'center',
        marginTop:24,
        borderRadius:SIZES.radius,
        backgroundColor : isEnableSendEmail() ? COLORS.primary : COLORS.lightGray3


      }}
      onPress={()=>navigation.goBack()}
      />

    </AuthLayout>
  )
}