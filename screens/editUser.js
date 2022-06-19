import { View, Text,TouchableOpacity,TextInput,StyleSheet,ImageBackground,Image } from 'react-native'
import React from 'react'
import {icons,images,SIZES,COLORS,FONTS} from '../constants'

//import BottomSheet from 'reanimated-bottom-sheet';
//import Animated from 'react-native-reanimated'


export default function editUser({navigation}) {

  function renderInner(){
  return(
    <Text>yoyooo</Text>

  )
  }
  function renderHeader(){
    return(
      <View style={styles.header}>
        <View style={styles.panelHandle}>

        </View>

      </View>
      
    )
    }

//const bs=React.useRef(null); 
//const fall= null;
  return (
    <View style={styles.container}>
    {/*  <BottomSheet
       ref={bs}
       snapPoints={[330,0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
  />*/}
     <View style={{margin:20,marginTop:5}}>
     <TouchableOpacity style={{
          width:50,
          paddingLeft:SIZES.padding,
          justifyContent:'center'
        }}
        onPress={()=>navigation.goBack()}
        >
          <Image 
            source={icons.back}        
            resizeMode="contain"  
            style={{
              width:30,
              height:30
            }}
          />
        </TouchableOpacity>
         <View style={{alignItems:'center'}}>
             <TouchableOpacity onPress={()=>{}}>
             
                 <View style={{
                     height:100,
                     width:100,
                     borderRadius:SIZES.radius,
                     justifyContent:'center',
                     alignItems:'center'
                 }}>
                     <ImageBackground 
                        source={images.avatar}
                        style={{height:100,width:100}}
                        imageStyle={{borderRadius:15}}
                     >
                         <View>
                         <Image
                            source={icons.camera} 
                            style={{
                                width : 30,
                                height : 30,
                                tintColor:COLORS.lightGray,
                                opacity:0.7,
                                alignItems:'center',
                                justifyContent:'center',
                                borderRadius:10,
                                borderColor:"white"

                              }}
                        />
                     </View>

                        

                     </ImageBackground>
                     
                     

                 </View>

             </TouchableOpacity>
             <Text style={{marginTop:10,fontSize:18,fontWeight:'bold'}}> Irfane MAMAN</Text>

         </View>
         <View style={styles.action}>
         <Image 
            source={icons.user}
            resizeMode = 'contain'
                style={{
                  width : 20,
                  height : 20,
                  tintColor:COLORS.secondary  
                }}/>
          <TextInput
          placeholder='Prénom'
          placeholderTextColor="#666666"

          autoCorrect={false}
          style={styles.textInput}
          />

         </View>
         <View style={styles.action}>
         <Image 
            source={icons.user}
            resizeMode = 'contain'
                style={{
                  width : 20,
                  height : 20,
                  tintColor:COLORS.secondary  
                }}/>
          <TextInput
          placeholder='Nom'
          placeholderTextColor="#666666"

          autoCorrect={false}
          style={styles.textInput}
          />

         </View>
         <View style={styles.action}>
         <Image 
            source={icons.mail}
            resizeMode = 'contain'
                style={{
                  width : 20,
                  height : 20,
                  tintColor:COLORS.secondary  
                }}/>
          <TextInput
          placeholder='email'
          keyboardType='email-address'
          placeholderTextColor="#666666"

          autoCorrect={false}
          style={styles.textInput}
          />

         </View>
         <View style={styles.action}>
         <Image 
            source={icons.tel}
            resizeMode = 'contain'
                style={{
                  width : 20,
                  height : 20,
                  tintColor:COLORS.secondary  
                }}/>
          <TextInput
          placeholder='Télephone'
          keyboardType='number-pad'
          placeholderTextColor="#666666"

          autoCorrect={false}
          style={styles.textInput}
          />

         </View>
         <TouchableOpacity 
         onPress={()=>{}}
         style={styles.commandButton}
         >
          <Text style={styles.panelButtonTitle}>Enregistrer</Text>
         </TouchableOpacity>
     </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: COLORS.primary,
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // shadowColor: '#000000',
      // shadowOffset: {width: 0, height: 0},
      // shadowRadius: 5,
      // shadowOpacity: 0.4,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
      backgroundColor:COLORS.lightGray2
    },
    
  });