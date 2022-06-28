import { StyleSheet, Text,TextInput,Alert, View,TouchableOpacity,ActivityIndicator,Image, ImagePickerIOS, Button } from 'react-native'
import React,{useState} from 'react'
import {icons,images,SIZES,COLORS,FONTS} from '../constants'
import { FormInput,
    CustomSwitch,
    TextButton,
    TextIconButton
} from '../components'
import {AuthLayout} from '../screens/'
import { utils } from '../utils'

import { setUserInfos } from '../redux/actions/actionUserInfo'
import { useDispatch } from 'react-redux'

import * as ImagePicker from 'react-native-image-picker';









const ProfilInfos = ({navigation}) => {

    const dispatch = useDispatch();

    const [lastName, setLastName] =useState("")
    const [firstName, setFirstName] =useState("")    
    const [profilImage, setProfilImage] =useState("https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=740&t=st=1656364125~exp=1656364725~hmac=f5f1e3162eb7c4c3fcc7e0538fba793876f919eccd60d7cc43f604c12fd77d06")
    const [tel, setTel] =useState("")
    const [isLoading, setIsLoading] = useState(false) 
    
    async function handleSubmit(){
        
        if (lastName.length >0 && firstName.length >0  && profilImage.length>0 && tel.length >0) {
            setIsLoading(true)
            
           await dispatch(setUserInfos(lastName,firstName,tel,profilImage))
              
            navigation.replace('Home')
            
        }
        else{
            alert('veuillez remplir tous les champs !')
            console.log(userData)
        }
    }
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibrary({
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.5,
        });
    
        console.log(result);
        /*
        {"assets": [{"fileName": "rn_image_picker_lib_temp_1267caca-7db3-4175-8ae9-ff399af168a2.jpg",
        "fileSize": 46591,
        "height": 1280,
        "type": "image/jpeg",
         "uri": "file:///data/user/0/com.toolrent/cache/rn_image_picker_lib_temp_1267caca-7db3-4175-8ae9-ff399af168a2.jpg",
         "width": 960}]}
        */
         if (!result.didCancel) {
            setProfilImage(result.assets[0].uri)
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
        
     {/*photo picker */}
     <View style={styles.photoContainer}>
        <View style={styles.wrapper}>
            <Image
                style={styles.photo}
                source={{uri: profilImage}}
            
            />
        </View>
        <Button title='Sélectionner une photo' color='#f7ad05' onPress={pickImage}/>

     </View>
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
    },
    photoContainer:{
        alignItems:'center'
    },
    wrapper:{
        width:'50%',
        height : 150,
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 9 , 
        borderColor:COLORS.secondary,
        borderWidth:1
    },
    photo:{
        width:'100%',
        height:'100%'
    }
})

export default ProfilInfos;