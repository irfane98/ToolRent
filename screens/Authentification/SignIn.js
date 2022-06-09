import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {AuthLayout} from '../'
import { FONTS,SIZES,COLORS,icons} from '../../constants'
import { FormInput,
         CustomSwitch,
         TextButton,
         TextIconButton
} from '../../components'
import {utils} from "../../utils";



export default function SignIn({navigation}) {

const [email, setEmail] = React.useState("")
const [password, setPassword] = React.useState("")
const [emailError, setEmailError] = React.useState("")
const [showPass, setShowPass] = React.useState(false)
const [saveMe, setSaveMe] = React.useState(false)

function isEnableSignIn(){
  return email !="" && password !="" && emailError==""
  
}
  return (
   <AuthLayout 
        title="Connectez vous!"
        subtitle="Content de vous revoir 🙃"
   >
     <View style={{
          flex:1,
          marginTop:24
     }}>
       {/* Form Input */}
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
            label="Mot de passe"
            secureTextEntry={!showPass}
            autoCompleteType="password"
            containerStyle={{
              marginTop:SIZES.radius
            }}
            onChange={(value)=> setPassword(value)}
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

       {/* save me & pwd forget */}
       <View style={{
         flexDirection:"row",
         marginTop:SIZES.radius,
         justifyContent:"space-between"
       }}>
          <CustomSwitch 
              value={saveMe}
              onChange={(value)=>setSaveMe(value)}
          />
          <TextButton
            label="Mot de passe oublié?"
            buttonContainerStyle={{
              backgroundColor:null
            }}
            labelStyle={{
              color:COLORS.gray,
              ...FONTS.body4
            }}
            onPress={()=>navigation.navigate("ForgotPassword")}
          />

       </View>

       {/* sign in */}
        <TextButton 
        label="Se Connecter"
        disabled={isEnableSignIn()?false :true}
        buttonContainerStyle={{
          height:55,
          alignItems:'center',
          marginTop:24,
          borderRadius: SIZES.radius,
          backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.lightGray3

          
          
        }}
        onPress={()=>navigation.navigate("Home")}

        />

       {/* sign up */}
       <View style={{
         flexDirection:'row',
         marginTop:SIZES.radius,
         justifyContent:'center'
       }}>
         <Text style={{
           color:COLORS.darkgray,
           ...FONTS.body4
         }}>
            Pas encore de compte?
         </Text>
         <TextButton
              label="S'inscrire"
              buttonContainerStyle={{
                marginLeft:4,
                backgroundColor:null
              }}
              labelStyle={{
                color:COLORS.primary,
                ...FONTS.h4
              }}
              onPress={()=>navigation.navigate("SignUp")}
         />

       </View>

     </View>
     {/* footer */}
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
            tintColor:COLORS.white
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