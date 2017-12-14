import React from 'react'
import { Platform, View } from 'react-native'
import LayoutStyle from './Styles/Layout'
import { config } from './package.json'
import { AdMobBanner } from 'expo'

export default class App extends React.Component {
  bannerError (e) {
    console.log(e)
  }

  render () {
    return (
      <View style={LayoutStyle.admob}>
        <AdMobBanner
          bannerSize="banner"
          adUnitID={config.admob['bottom-ad'][Platform.OS]}
          didFailToReceiveAdWithError={(e) => console.log('bottom-ad:', e)}/>
      </View>
    )
  }
}
