import { View,SafeAreaView,StyleSheet,Image,TouchableOpacity,Alert } from 'react-native'
import React,{useEffect,useState} from 'react'
import {
  Avatar,   
  Title,
  Text,
  Caption,
  TouchableRipple,
} from 'react-native-paper';

import {icons,images,SIZES,COLORS,FONTS} from '../constants'
//import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncStorage } from 'react-native';





export default function User({props,navigation}) {

  const [lastName, setLastName] =useState("")
  const [firstName, setFirstName] =useState("")    
  const [profilImage, setProfilImage] =useState("https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=740&t=st=1656364125~exp=1656364725~hmac=f5f1e3162eb7c4c3fcc7e0538fba793876f919eccd60d7cc43f604c12fd77d06")
  const [tel, setTel] =useState("")
  const [isAuth, setIsAuth] = useState(false) 

  async function load(){
    try {
    let jsonValue = await AsyncStorage.getItem('userProfilInfos')

    if (jsonValue !== null) {
      let user = JSON.parse(jsonValue);
      /*
      {
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      tel: tel,
      profilImage: profilImage

      }
      */
     const userId = user.userId
     fetchData(userId)
    }
    } catch (error) {
      Alert.alert(
        'Erreur',
        'Nous avons un problème'
        [{text:'OK',onPress:()=>props.navigation.navigate('SignIn')}]
        )
      
    }

  }
  async function fetchData(userId){

    const firebaseResp = await fetch(`https://toolrent-351817-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json`)
    const fetchedData= await firebaseResp.json()

    setLastName(fetchedData.lastName)
    setFirstName(fetchedData.firstName)
    setTel(fetchedData.tel)
    setProfilImage(fetchedData.profilImage)
    setIsAuth(true)
  }

  useEffect(() => {
    load()
  }, [])
  


  return (
    <SafeAreaView sytyle={styles.userInfoSection}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection:'row',marginTop:15}}>
          <Avatar.Image
              source={{uri:profilImage}}
              size={80}
          />
          <View style={{marginLeft:20}}>
            <Title style={[styles.title,{
              marginTop:15,
              marginBottom: 5,
            }]
            }>{lastName} {firstName} </Title>
            <Caption style={styles.caption}>@{lastName}_{firstName}</Caption>
          </View>
          <TouchableOpacity 
          style={{
            width:50,
            paddingRight : SIZES.padding * 2,
            justifyContent:'center',
            elevation:0,

          }}
          onPress={()=>navigation.navigate("editUser")}>
            <Image
                source={icons.editProfile}
                resizeMode = 'contain'
                style={{
                  width : 23,
                  height : 23,
                  marginLeft:"190%",
                  marginTop:-20,
                }}
            />

        </TouchableOpacity>

        </View>

      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Image 
            source={icons.location}
            resizeMode = 'contain'
                style={{
                  width : 20,
                  height : 20,
                  tintColor:COLORS.primary
                }}
          />
          <Text style={{...FONTS.body3,marginLeft:9}}> Paris 75010 yves toudic</Text>

        </View>
        <View style={styles.row}>
          <Image 
            source={icons.tel}
            resizeMode = 'contain'
                style={{
                  width : 20,
                  height : 20,
                  tintColor:COLORS.primary
                }}
          />
          <Text style={{...FONTS.body3,marginLeft:9}}> {tel}</Text>

        </View>
        <View style={styles.row}>
          <Image 
            source={icons.mail}
            resizeMode = 'contain'
                style={{
                  width : 20,
                  height : 20,
                  tintColor:COLORS.primary
                }}
          />
          <Text style={{...FONTS.body3,marginLeft:9}}> irfane@irfane.fr</Text>

        </View>
       </View>
       <View style={styles.infoBoxWrapper}>
         <View style={styles.infoBox}>

        <Title style={{...FONTS.h1}}> 0</Title>
        <Caption style={{ ...FONTS.body3}}>Locations effectués</Caption>

         </View>
       </View>
       <View style={styles.menuWrapper}>
         <TouchableRipple onPress={()=>{}}>

            <View style={styles.menuItem}>
              <Image
              source={icons.like}
              resizeMode = 'contain'
              style={{
                width : 20,
                height : 20,
                tintColor:COLORS.secondary
                }}
                />
              <Text style={styles.menuItemText}> Favoris </Text>

             </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{}}>

            <View style={styles.menuItem}>
              <Image
              source={icons.card}
              resizeMode = 'contain'
              style={{
                width : 20,
                height : 20,
                tintColor:COLORS.secondary
                }}
                />
              <Text style={styles.menuItemText}> Mes paiements</Text>

             </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{}}>

            <View style={styles.menuItem}>
              <Image
              source={icons.share}
              resizeMode = 'contain'
              style={{
                width : 20,
                height : 20,
                tintColor:COLORS.secondary
                }}
                />
              <Text style={styles.menuItemText}> Partager à un amis </Text>

             </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{}}>

            <View style={styles.menuItem}>
              <Image
              source={icons.settings}
              resizeMode = 'contain'
              style={{
                width : 20,
                height : 20,
                tintColor:COLORS.secondary
                }}
                />
              <Text style={styles.menuItemText}> Paramètres </Text>

             </View>
        </TouchableRipple>
       </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
})