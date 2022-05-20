import React from 'react'
import { View, Image ,TouchableOpacity } from 'react-native'

import { createBottomTabNavigator,BottomTabBar } from '@react-navigation/bottom-tabs'

import { Home, Rental} from '../screens'
import { COLORS,icons } from '../constants'

const Tab= createBottomTabNavigator();

export default function tabs() {
  return (
   <Tab.Navigator tabBarOptions={{showLabel : false}}>
       <Tab.Screen 
            name='Home'
            component={Home}
            options = {{
                tabBarIcon:({focused})=>(
                    <Image 
                        source={icons.search}
                        resizeMode = 'contain'
                        style = {{
                            width:25,
                            heigth:25,
                            tintColor : focused ? COLORS.primary : COLORS.secondary
                        }}
                    />
                    
                )
            }}
       />
       <Tab.Screen 
            name='Rental'
            component={Rental}
            options = {{
                tabBarIcon:({focused})=>(
                    <Image 
                        source={icons.location}
                        resizeMode = 'contain'
                        style = {{
                            width:25,
                            heigth:25,
                            tintColor : focused ? COLORS.primary : COLORS.secondary
                        }}
                    />
                    
                )
            }}
       />
      
       
   </Tab.Navigator>
  )
}