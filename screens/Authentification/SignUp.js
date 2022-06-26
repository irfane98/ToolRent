import { View, Text,TouchableOpacity,Image,Alert } from 'react-native'
import React from 'react'
import {AuthLayout} from '../'

import { FONTS,COLORS,SIZES,icons } from '../../constants';

import { FormInput,TextButton, TextIconButton } from '../../components';
import { utils } from '../../utils';
import { actionSignup } from '../../redux/actions/actionAuth'
import { useDispatch } from 'react-redux'



export default function SignUp({navigation}) {

  const dispatch= useDispatch();

const [email, setEmail] = React.useState("")
const [username, setUsername] = React.useState("") 
const [password, setPassword] = React.useState("")
const [showPass, setShowPass] = React.useState(false)
const [emailError, setEmailError] = React.useState("")
const [usernameError, setUsernameError] = React.useState("")
const [passwordError, setPasswordError] = React.useState("")
const [error, setError] = React.useState()


React.useEffect(() => {
  if (error != null) {
    
    Alert.alert(
      'Erreur',
      error,
      [{text:'OK'}]
    )
  }
}, [error])




 function isEnableSignUp(){
  return email!="" &&username!="" && password !="" && emailError =="" && passwordError =="" && usernameError==""
}
async function handleSubmit(){
  if (email.length>0 && password.length>0) {
    setError(null)
   try {
      await dispatch(actionSignup(email,password))
      navigation.replace('ProfilInfos')
   } catch (error) {
    setError(error.message);
    
   }
    
  }
}

 return (
    <AuthLayout
    title="Inscription 🙂 "
    subtitle=" Veuillez vous enregistrer ! "
    
    >
      {/*Form input & signup */}
      <View
      style={{
        flex:1,
        marginTop:24
      }}
      >

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
       <FormInput 
                  label="Nom d'utilisateur"
                  containerStyle={{
                    marginTop:SIZES.radius
                  }}
                  onChange={(value) =>{
                    setUsername(value)
                  }}
                  errorMsg={usernameError}
                  appendComponent={
                      <View style={{
                        justifyContent:'center'
                      }}
                      >
                        <Image
                            source={username =="" ||(username != "" && usernameError=="") ? icons.correct :icons.cancel}
                            style={{
                              height:20,
                              width:20,
                              tintColor: username==""? COLORS.gray :(username !="" && usernameError=="") ? "green": "red"
                            }}
                        />

                      </View>
                  }

                />
                <FormInput 
            label="Mot de passe"
            secureTextEntry={!showPass}
            autoCompleteType="password"
            containerStyle={{
              marginTop:SIZES.radius
            }}
            onChange={(value)=> {
              utils.validatePassword(value , setPasswordError)
              setPassword(value)}}
            errorMsg={passwordError}
            appendComponent={
              <TouchableOpacity style={{
                width:40,
                alignItems:'flex-end',
                justifyContent:'center'
              }}
              onPress={()=>setShowPass(!showPass)}
              >
                <Image
                source={showPass? icons.show : icons.noshow}
                style={{
                  height:20,
                  width:20,
                  tintColor:"gray"
                }}
                
                />

              </TouchableOpacity>
            }
       />
       {/*SignUp & signIn */}
       <TextButton 
       label="S'inscrire"
       disabled={isEnableSignUp() ? false : true }
       buttonContainerStyle={{
         height:55,
         alignItems:'center',
         marginTop :24,
         borderRadius:SIZES.radius,
         backgroundColor:isEnableSignUp()? COLORS.primary :COLORS.lightGray3
       }}
      // onPress={()=> navigation.navigate("Otp")}
      onPress={handleSubmit}

       />
       <View  style={{
            flexDirection:'row',
            marginTop:SIZES.radius,
            justifyContent:'center'
       }}
       >
         <Text style={{color:COLORS.darkgray,...FONTS.body4}}> Déjà un compte ?</Text>
         <TextButton
            label="Se connecter"
            buttonContainerStyle={{
              backgroundColor : null
            }}
            labelStyle={{
              marginLeft:4,
              color:COLORS.primary,
              ...FONTS.h4
            }}
            onPress={()=>navigation.goBack()}
         /> 
       </View>
      </View>
      <View>
       {/* facebook */}
       <TextIconButton
          containerStyle={{
            height:50,
            alignItems:'center',
            borderRadius:SIZES.radius,
            backgroundColor:"blue"
          }}
          icon={icons.facebook} 
          iconPosition="LEFT"
          iconStyle={{
            tintColor:null
          }}
          label="Se connecter avec Facebook"
          labelStyle={{
            marginLeft:SIZES.radius,
            color:COLORS.white
          }}
          onPress={()=> console.log("Facebook")}
       />
       {/* google*/}
       <TextIconButton
          containerStyle={{
            height:50,
            alignItems:'center',
            marginTop:SIZES.radius,
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.lightGray3
          }}
          icon={icons.google} 
          iconPosition="LEFT"
          iconStyle={{
            tintColor:null
          }}
          label="Se connecter avec Google"
          labelStyle={{
            marginLeft:SIZES.radius,
            
          }}
          onPress={()=> console.log("Google")}
       />
     </View>

    </AuthLayout>
  )
}