import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import LayoutStyle from './Styles/Layout'
import Navigator from './Navigator'
import AdMob from './AdMob'
import Waiting from './Waiting'

export default class App extends React.Component {
  render () {
    return (
      <View style={LayoutStyle.container}>
        <Navigator />
        <AdMob />
        <Waiting ref={ref => global.waitingRef = ref} />
      </View>
    )
  }
}