import { View,SafeAreaView,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {
  Avatar,   
  Title,
  Text,
  Caption,
  TouchableRipple,
} from 'react-native-paper';

import {icons,images,SIZES,COLORS,FONTS} from '../constants'
import { NavigationContainer } from '@react-navigation/native';




export default function User({navigation}) {
  return (
    <SafeAreaView sytyle={styles.userInfoSection}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection:'row',marginTop:15}}>
          <Avatar.Image
              source={images.avatar}
              size={80}
          />
          <View style={{marginLeft:20}}>
            <Title style={[styles.title,{
              marginTop:15,
              marginBottom: 5,
            }]
            }>Irfane MAMAN</Title>
            <Caption style={styles.caption}>@irfane_maman</Caption>
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
          <Text style={{...FONTS.body3,marginLeft:9}}> (+33 XXXXXXXXX)</Text>

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

        <Title style={{...FONTS.h1}}> 12</Title>
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