import { StyleSheet, Text,TextInput,Alert, View,TouchableOpacity,ActivityIndicator,Image } from 'react-native'
import React,{useState} from 'react'
import {icons,images,SIZES,COLORS,FONTS} from '../constants'
import { FormInput,
    CustomSwitch,
    TextButton,
    TextIconButton
} from '../components'
import {AuthLayout} from '../screens/'
import { utils } from '../utils'
import { AsyncStorage } from 'react-native';






const ProfilInfos = ({navigation}) => {
    const [lastName, setLastName] =useState("")
    const [firstName, setFirstName] =useState("")    
    const [profilImage, setProfilImage] =useState("")
    const [tel, setTel] =useState("")
    const [isLoading, setIsLoading] = useState(false) 
    
    async function handleSubmit(){
        
        if (lastName.length >0 && firstName.length >0  && profilImage.length>0 && tel.length >0) {
            setIsLoading(true)
            // firebase DATABASE
            const firebaseResp = await fetch('https://toolrent-351817-default-rtdb.europe-west1.firebasedatabase.app/users.json',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    //ID via Firebase   
                    firstName: firstName,
                    lastName: lastName,
                    tel: tel,
                    profilImage: profilImage
                })
            })
            
            if(!firebaseResp.ok){
                throw new Error('Oups nous avons un problème !')
            }
            
            const userData = await firebaseResp.json();
            console.log(userData); //object name:ID 
            //{"name": "-N5anS55H83NjMrYTYHg"}
            
            saveToAsyncStorage(userData.name,firstName,lastName,tel,profilImage)
            
            navigation.replace('Home')
            
        }
        else{
            alert('veuillez remplir tous les champs !')
            console.log(userData)
        }
    }
    
    async function saveToAsyncStorage(userId,firstName,lastName,tel,profilImage){
        
        await AsyncStorage.setItem('userProfilInfos',JSON.stringify({
            userId: userId,
            firstName: firstName,
            lastName: lastName,
            tel: tel,
            profilImage: profilImage

        }))
}

  return (
    <AuthLayout 
        title=" Indiquez vos informations 📋!"
   >   
     <View style={{
          flex:1,
          marginTop:24
     }}>
       <TextInput
            placeholder='Votre Nom'
            style={styles.input}
            onChangeText={text =>{
                setLastName(text)}}

       />
       <TextInput
            placeholder='Votre Prénom'
            style={styles.input}
            onChangeText={text => setFirstName(text)}

       />
       
       <TextInput
            placeholder='Télephone'
            style={styles.input}
            onChangeText={text => setTel(text)}
            keyboardType='number-pad'

       />
        
      <TextInput
        placeholder='Votre Image'
       style={styles.input}
       onChangeText={text => setProfilImage(text)}

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
        backgroundColor:COLORS.lightGray3,
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