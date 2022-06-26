import { StyleSheet, Text,TextInput,Alert, View,TouchableOpacity,ActivityIndicator,AsyncStorage,Image } from 'react-native'
import React,{useState} from 'react'
import {icons,images,SIZES,COLORS,FONTS} from '../constants'
import { FormInput,
    CustomSwitch,
    TextButton,
    TextIconButton
} from '../components'
import {AuthLayout} from '../screens/'


const ProfilInfos = ({navigation}) => {
const [lastName, setLastName] =useState("")
const [firstName, setFirstName] =useState("")
const [email, setEmail] =useState("")
const [emailError, setEmailError] = React.useState("")

const [profilImage, setProfilImage] =useState("")
const [tel, setTel] =useState("")
const [isLoading, setIsLoading] = useState(false) 

async function handleSubmit(){
    if (lastName.length>0 && firstName.length>0 && email.length>0 && profilImage.length>0 && tel.length>0) {
        setIsLoading(true)
        // firebase DATABASE
       const firebaseResp = await fetch('https://toolrent-351817-default-rtdb.europe-west1.firebasedatabase.app/',{
            method:'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                //ID via Firebase   
                firstName:firstName,
                lastName:lastName,
                tel:tel,
                email:email,
                profilImage:profilImage
            })
        })
        if(!firebaseResp.ok){
            throw new Error('Oups nous avons un problème !')
        }
        const userDate = await firebaseResp.json()
        console.log(userData); //object name:ID

        navigation.replace('Home')

    }else{
        alert('veuillez remplir tous les champs !')
    }
}

  return (
    <AuthLayout 
        title=" Indiquez vos informations 📋!"
   >
     <View style={{
          flex:1,
          marginTop:24
     }}>
       <FormInput 
            label="Votre Nom"
            style={styles.input}
            onChangeText={text => setLastName}

       />
       <FormInput 
            label="Votre Prénom"
            style={styles.input}
            onChangeText={text => setFirstName}

       />
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
            label="Votre Tél"
            style={styles.input}
            onChangeText={text => setTel}

       />
       <FormInput 
       label="Image"
       style={styles.input}
       onChangeText={text => setProfilImage}

  />
  {
    isLoading ? 
    <ActivityIndicator
        size='large'
        color="#f7ad05"
    /> :
  <TouchableOpacity 
        style={styles.touchable}
        onPress={handleSubmit}
  >
    <View style={styles.btnContainer}>
        <Text style={styles.btnText}> Valider</Text>
    </View>
  </TouchableOpacity>
  } 
   </View>
     

     </AuthLayout>
    )
  }
  




const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputContainer:{
        width:'100%',
        paddingHorizontal:50
    },
    input:{
        backgroundColor:COLORS.white,
        borderRadius:25,
        padding:9,
        textAlign:'center',
        fontSize:19,
        marginVertical:10
    },
    touchable:{
        marginVertical:9
    },
    text:{
        color:COLORS.black,
        fontSize:25,
        textAlign:'center'
    },
    btnContainer:{
        backgroundColor:COLORS.primary,
        borderRadius:7,
        padding:9
    },
    btnText:{
        fontSize:17,
        textAlign:'center',
        textTransform:'uppercase'
    }
})

export default ProfilInfos