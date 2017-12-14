import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import HomeController from '../Controllers/HomeController'
import HeaderIconButton from '../Components/HeaderIconButton'
import ScrumPokerCards from '../Components/ScrumPokerCards'
import LayoutStyle from '../Styles/Layout'
import StartModal from '../Modals/StartModal'
import SignInModal from '../Modals/SignInModal'
import ResultModal from '../Modals/ResultModal'

let homeScreen = null

export default class HomeScreen extends HomeController {
  constructor (props) {
    super(props)

    this.state = {
      session: null,
      user: null,
      membersResult: []
    }

    homeScreen = this
  }

  render () {
    const {session, user, membersResult} = this.state

    return (
      <View style={LayoutStyle.container}>
        <ScrumPokerCards {...{session, user}}
                         onResult={this.result.bind(this)}
                         onSignOut={this.signOut.bind(this)}
                         onSelectCard={this.selectCard.bind(this)}/>

        <ResultModal ref={ref => this.resultModal = ref}
                    {...{session, user}}
                    members={membersResult}
                    refresh={this.refreshSession.bind(this)}/>

        <StartModal ref={ref => this.startModal = ref}
                    {...{session, user}}
                    start={this.startNewSession.bind(this)}
                    end={this.endSession.bind(this)}
                    join={this.joinSession.bind(this)}/>

        <SignInModal ref={ref => this.signInModal = ref}
                     {...{session, user}}
                     signIn={this.signIn.bind(this)}/>
      </View>
    )
  }
}

HomeScreen.navigationOptions = {
  headerLeft: (
    <View style={LayoutStyle.header}>
      <HeaderIconButton icon="code-tags"
                        iconSource="MaterialCommunityIcons"
                        onPress={() => homeScreen.aboutMe()}/>
    </View>
  ),
  headerRight: (
    <View style={LayoutStyle.header}>
      <HeaderIconButton icon="qrcode-scan"
                        iconSource="MaterialCommunityIcons"
                        onPress={() => homeScreen.start()}/>
    </View>
  )
}