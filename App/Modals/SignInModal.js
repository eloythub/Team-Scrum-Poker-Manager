import React from 'react'
import PropTypes from 'prop-types';
import { Image, TextInput, View, Button, Alert, Text, Platform } from 'react-native'
import { BlurView } from 'expo'
import Modal from '../Components/Modal'
import BaseModal from './BaseModal'
import LayoutStyle from '../Styles/Layout'
import LoginStyle from '../Styles/Login'
import { config } from '../package.json'
import { AdMobBanner } from 'expo'

export default class SignInModal extends BaseModal {
  constructor (props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  static propTypes = {
    signIn: PropTypes.func
  }

  componentWillReceiveProps () {
    this.setState({})
  }

  signIn () {
    if (!this.state.name) {
      Alert.alert('Name is mandetory')

      return
    }

    this.props.signIn(this.state.name)

    this.close()
  }

  render () {
    return (
      <Modal ref={ref => this.modal = ref}
             animationType="fade"
             hardwareAccelerated={false}
             transparent={true}>
        <BlurView tint="dark"
                  intensity={80}
                  style={LayoutStyle.modalContainer}>
          <View style={LoginStyle.transparentContainer}>
            <AdMobBanner
              bannerSize="banner"
              adUnitID={config.admob['sign-in-modal-ad'][Platform.OS]}
              didFailToReceiveAdWithError={(e) => console.log('sign-in-modal-ad:', e)} />

            <View style={LayoutStyle.space}/>
            <Text style={LoginStyle.description}>
              Who are you?
            </Text>
            <TextInput placeholder="NAME"
                       caption="NAME"
                       allowFontScaling={true}
                       placeholderTextColor="#777777"
                       keyboardType="email-address"
                       autoCorrect={false}
                       fontSize={16}
                       style={LoginStyle.textInput}
                       returnKeyType="join"
                       onChangeText={(name) => this.setState({name})}
            />

            <Button onPress={this.signIn.bind(this)} title="Join" />
            <Button onPress={this.close.bind(this)} title="Close" color="#ff0000" />
          </View>
        </BlurView>
      </Modal>
    )
  }
}
