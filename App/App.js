import React from 'react'
import * as firebase from 'firebase';
import { Text, View, StatusBar } from 'react-native'
import LayoutStyle from './Styles/Layout'
import Navigator from './Navigator'
import {config} from './package.json'

firebase.initializeApp(config.firebase);

export default class App extends React.Component {
  render () {
    return (
      <View style={LayoutStyle.container}>
        <Navigator />
      </View>
    )
  }
}