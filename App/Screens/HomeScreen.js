import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import HomeController from '../Controllers/HomeController'
import HeaderIconButton from '../Components/HeaderIconButton'
import LayoutStyle from '../Styles/Layout'
import SignInModal from '../Modals/SignInModal'

let signInModal

export default class HomeScreen extends HomeController {
  static navigationOptions = {
    headerLeft: (
      <View style={LayoutStyle.header}>
        <HeaderIconButton icon="log-in" iconSource="Feather" onPress={() => signInModal.open()}/>
      </View>
    ),
    headerRight: (
      <View style={LayoutStyle.header}>
        <HeaderIconButton icon="link" iconSource="Octicons" onPress={() => console.log('add')}/>
        <HeaderIconButton icon="users" iconSource="FontAwesome" onPress={() => console.log('add')}/>
      </View>
    )
  }

  render () {
    return (
      <View style={LayoutStyle.container}>
        <SignInModal ref={ref => signInModal = ref}
                     signIn={(email, password) => console.log({email, password})}/>
      </View>
    )
  }
}

