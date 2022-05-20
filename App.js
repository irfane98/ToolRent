import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './navigation/tabs'


import { View, Text } from 'react-native'

import { Home,Rental } from './screens'

const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator
        screenOptions={{
          headerShown :false
        }}
        initialRouteName={'Home'}
     >
       <Stack.Screen name='Home' component={Tabs}/>
       <Stack.Screen name='Rental' component={Rental}/>

     </Stack.Navigator>
   </NavigationContainer>
  )
}