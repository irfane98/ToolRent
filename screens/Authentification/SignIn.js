import { View, Text,TouchableOpacity,Image,Alert, AsyncStorage } from 'react-native'
import React from 'react'
import {AuthLayout} from '../'
import { FONTS,SIZES,COLORS,icons} from '../../constants'
import { FormInput,
         CustomSwitch,
         TextButton,
         TextIconButton
} from '../../components'
import {utils} from "../../utils";
import { actionLogin } from '../../redux/actions/actionAuth'
import { actionSignup } from '../../redux/actions/actionAuth'
import { useDispatch } from 'react-redux'






export default function SignIn({navigation}) {

 
  const dispatch= useDispatch();



const [email, setEmail] = React.useState("")
const [password, setPassword] = React.useState("")
const [emailError, setEmailError] = React.useState("")
const [showPass, setShowPass] = React.useState(false)
const [saveMe, setSaveMe] = React.useState(false)
const [error, setError] = React.useState()

async function load(){
  const userDetailsStr=await AsyncStorage.getItem('usersDetails');
  const userDetailsObj=JSON.parse(userDetailsStr);
  const {token,userId,dateTokenExpire}= userDetailsObj;
  const expireDate= new Date(dateTokenExpire)
  if (expireDate<= new Date() ||!token || !userId) {
    return;
  }
  navigation.navigate('Home')
}

React.useLayoutEffect(() => {
  load();
}, [])


React.useEffect(() => {
  if (error != null) {
    
    Alert.alert(
      'Erreur',
      error,
      [{text:'OK'}]
    )
  }
}, [error]
)

function isEnableSignIn(){
  return email !="" && password !="" && emailError==""
  
}
async function handleSubmit(){
  if (email.length>0 && password.length>0) {
    setError(null)
   try {
      await dispatch(actionLogin(email,password))
      navigation.navigate('Home')
   } catch (error) {
    setError(error.message);
    
   }
    
  }else{
    setError(null)
   try {
      await dispatch(actionLogin(email,password))
      navigation.navigate('Home')
   } catch (error) {
    setError(error.message);
    
   }
  }
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
            keyboardType='email-address'
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
       // onPress={()=>navigation.navigate("Otp")}
       onPress={handleSubmit}

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
      {/* se connecter en tant qu'invité */}
      <TextButton 
        label="Continuer en tant qu'invité"
        disabled={false}
        buttonContainerStyle={{
          height:55,
          alignItems:'center',
          marginTop:24,
          borderRadius: SIZES.radius,
          backgroundColor:COLORS.primary 

          
          
        }}
        onPress={()=>navigation.navigate("Home")}

        />

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