import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './navigation/tabs'



import { View, Text } from 'react-native'

import { 
  Home,
  Rental,
  Location,
  User,
  editUser,
  onBoarding,
  SignIn,
  SignUp,
  Otp,
  ForgotPassword
} from './screens'

const Stack = createStackNavigator()

export default function App() {
 
  return (
   <NavigationContainer>
     <Stack.Navigator
        screenOptions={{
          headerShown :false
        }}
        initialRouteName={'onBoarding'}
     >
       <Stack.Screen name='onBoarding' component={onBoarding}/>
       <Stack.Screen name='SignIn' component={SignIn}/>
       <Stack.Screen name='SignUp' component={SignUp}/>
       <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
       <Stack.Screen name='Otp' component={Otp}/>
       <Stack.Screen name='Home' component={Tabs}/>
       <Stack.Screen name='Rental' component={Rental}/>
       <Stack.Screen name='Location' component={Location}/>
       <Stack.Screen name='User' component={User}/>
       <Stack.Screen name='editUser' component={editUser}/>

     </Stack.Navigator>
   </NavigationContainer>
  )
}