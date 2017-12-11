import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import HomeController from '../Controllers/HomeController'
import HeaderIconButton from '../Components/HeaderIconButton'
import ScrumPokerCards from '../Components/ScrumPokerCards'
import LayoutStyle from '../Styles/Layout'
import StartModal from '../Modals/StartModal'
import SignInModal from '../Modals/SignInModal'

let homeScreen = null

export default class HomeScreen extends HomeController {
  constructor (props) {
    super(props)

    this.state = {
      session: null,
      user: null
    }

    homeScreen = this
  }

  render () {
    return (
      <View style={LayoutStyle.container}>
        <ScrumPokerCards {...this.state} onSignOut={this.signOut.bind(this)}/>

        <StartModal ref={ref => this.startModal = ref}
                    {...this.state}
                    start={this.startNewSession.bind(this)}
                    end={this.endSession.bind(this)}
                    join={this.joinSession.bind(this)}/>

        <SignInModal ref={ref => this.signInModal = ref}
                     {...this.state}
                     signIn={this.signIn.bind(this)}/>
      </View>
    )
  }
}

HomeScreen.navigationOptions = {
  headerRight: (
    <View style={LayoutStyle.header}>
      <HeaderIconButton icon="qrcode-scan"
                        iconSource="MaterialCommunityIcons"
                        onPress={() => homeScreen.start()}/>
    </View>
  )
}