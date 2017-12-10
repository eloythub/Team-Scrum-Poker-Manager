import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './Screens/HomeScreen'

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
})
