import { View, Text,TextInput } from 'react-native'
import React from 'react'
import { FONTS,SIZES,COLORS } from '../constants'

export default function FormInput({
    containerStyle,
    label,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType='default',
    autoCompleteType="off",
    autoCapitalize="none",
    errorMsg ="",
    value=""

    }) {
  return (
    <View  style={{...containerStyle}}> 
    {/*label & error msg */}
    <View  style={{
        flexDirection:'row',
        justifyContent:'space-between',
    }}>
        <Text style={{ color:COLORS.gray,...FONTS.body4}}>{label}</Text>
        <Text style={{color:COLORS.red}}>{errorMsg}</Text>
    </View>
    {/*textInput */}
    <View style={{
        flexDirection:'row',
        height:55,
        paddingHorizontal:24,
        marginTop:SIZES.base,
        borderRadius:SIZES.radius,
        backgroundColor:COLORS.lightGray3

    }}>
        {prependComponent}

        <TextInput
            style={{
                flex:1,
                ...inputStyle
            }}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={COLORS.gray}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCompleteType={autoCompleteType}
            autoCapitalize={autoCapitalize}
            onChangeText={(text)=>onChange(text)}
        />

        {appendComponent}

    </View>
      
</View>
  )
}