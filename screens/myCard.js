import { View, Text,Image,ImageBackground } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {FONTS,SIZES,icons,images,COLORS} from "../constants"
import {utils} from "../utils"
import { FormInput, Header, IconButton , FormInputCheck ,TextButton} from '../components'

export default function myCard({navigation,route}) {

    const [cardNumber, setCardNumber] = React.useState("")
    const [cardNumberError, setCardNumberError] = React.useState("")
    const [cardName, setCardName] = React.useState("")
    const [cardNameError, setCardNameError] = React.useState("")
    const [expireDate, setExpireDate] = React.useState("")
    const [expireDateError, setExpireDateError] = React.useState("")
    const [cvv, setCvv] = React.useState("")
    const [cvvError, setCvvError] = React.useState("")
    const [isRemember, setIsRemenber] = React.useState("")

    function renderHeader(){
        return(
            <Header
                title='Paiement'
                containerStyle={{
                    height:50,
                    marginHorizontal:SIZES.padding2,
                    marginTop:10
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width:40,
                            height:40,
                            justifyContent:'center',
                            alignItems:'center',
                            borderWidth:1,
                            borderRadius:SIZES.radius,
                            
                        }}
                        iconStyle={{
                            width:20,
                            height:20,
                            tintColor:COLORS.black
                        }}
                        onPress={()=>navigation.goBack()}
                    
                    
                    />
                }
            
            />
        )
    }
    function renderCard(){
        return(
            <ImageBackground
                source={images.card}
                style={{
                    height:250,
                    width:"100%",
                    marginTop:SIZES.radius,
                    borderRadius:SIZES.radius,
                    overflow:'hidden'
                }}
            >
                {/*card detail*/}
                <View style={{
                    position:'absolute',
                    bottom:10,
                    left:0,
                    right:0,
                    paddingHorizontal:SIZES.padding
                }}>
                    <Text style={{
                        color:COLORS.white,
                        ...FONTS.h3,
                        marginLeft:13,
                    
                    }}>{cardName}</Text>
                    <View style={{flexDirection:'row',marginLeft:15,}}>
                        <Text style={{
                            color:COLORS.white,
                            ...FONTS.body4,
                            flex:1  
                        }}>{cardNumber}</Text>
                        <Text style={{
                            color:COLORS.white,
                            ...FONTS.body4,
                            marginRight:25,
                            marginTop:20,
                            marginVertical:10

                        }}>{expireDate}</Text>

                    </View>

                </View>
                
            </ImageBackground>
        )
    }
    function renderForm(){
        return(
            <View style={{
                marginTop:SIZES.padding*2,
            }}>
                {/*card number */}
                <FormInput
                    label="Numéro de carte"
                    keyboardType='number-pad'
                    value={cardNumber}
                    maxLength={19}
                    onChange={(value)=>{setCardNumber(value.replace(/\s/g,'').replace(/(\d{4})/g,'$1 ').trim())
                }}
                appendComponent={
                    <FormInputCheck
                        value={cardNumber}
                        error={cardNumberError}
                    />
                }
                />
            {/* CardholderName */}
            <FormInput
                    label="Nom sur la carte"
                    value={cardName}
                    containerStyle={{
                        marginTop:SIZES.radius
                    }}
                    onChange={(value)=>{setCardName(value)}}
                appendComponent={
                    <FormInputCheck
                        value={cardName}
                        error={cardNameError}
                    />
                }
                />
                {/*expire date & cvv */}
                <View  style={{
                    flexDirection:'row',
                    marginTop:SIZES.radius
                }}>
                    <FormInput
                    label="Date d'expiration"
                    value={expireDate}
                    placeholder="MM/YY"
                    maxLength={5}
                    containerStyle={{
                        flex:1
                    }}
                    onChange={(value)=>{setExpireDate(value)}}
                appendComponent={
                    <FormInputCheck
                        value={expireDate}
                        error={expireDateError}
                    />
                }
                />
                 <FormInput
                    label="CVV"
                    value={cvv}
                    maxLength={3}
                    containerStyle={{
                        flex:1,
                        marginLeft:SIZES.radius
                    }}
                    onChange={(value)=>{setCvv(value)}}
                appendComponent={
                    <FormInputCheck
                        value={cvvError}
                        error={cvvError}
                    />
                }
                />

                </View>
            </View>
        )
    }   
    function renderFooter(){
        return(
            <View style={{
                paddingTop:SIZES.radius,
                paddingBottom:SIZES.padding,
                paddingHorizontal:SIZES.padding
            }}>
                <TextButton
                    label="Valider"
                    buttonContainerStyle={{
                       height:60,
                       borderRadius:SIZES.radius,
                       backgroundColor:COLORS.primary    
                    }}
                    onPress={()=>{}}

                />

            </View>
        )

    }

  return (
    <View style={{
        flex:1,
        backgroundColor:COLORS.white
    }}>
        {/*header*/}
        {renderHeader()}
        {/*body*/}
        <KeyboardAwareScrollView
            keyboardDismissMode='on-drag'
            containerStyle={{
                flexGrow:1,
                paddingHorizontal: SIZES.padding
            }}
        > 
        {/*card */}
        {renderCard()}
        {/*form*/}
        {renderForm()}
            
        </KeyboardAwareScrollView>
        {/*footer*/}
        {renderFooter()}
        </View>
  )
}