import React from 'react'
import PropTypes from 'prop-types';
import { Image, TextInput, View, Button } from 'react-native'
import { BlurView } from 'expo'
import Modal from '../Components/Modal'
import BaseModal from './BaseModal'
import LayoutStyle from '../Styles/Layout'
import LoginStyle from '../Styles/Login'
import Images from '../Images'

export default class SignInModal extends BaseModal {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  static propTypes = {
    signIn: PropTypes.func
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
            <Image source={Images.logo} style={LoginStyle.logo}/>

            <TextInput ref={ref => this.email = ref}
                       placeholder="EMAIL"
                       caption="EMAIL"
                       allowFontScaling={true}
                       placeholderTextColor="#777777"
                       keyboardType="email-address"
                       autoCorrect={false}
                       fontSize={16}
                       style={LoginStyle.textInput}
                       returnKeyType="next"
                       onSubmitEditing={() => this.password.focus()}
                       onChangeText={(email) => this.setState({email})}
            />
            <TextInput ref={ref => this.password = ref}
                       placeholder="PASSWORD"
                       caption="PASSWORD"
                       placeholderTextColor="#777777"
                       autoCorrect={false}
                       fontSize={16}
                       style={LoginStyle.textInput}
                       returnKeyType="done"
                       secureTextEntry={true}
                       onSubmitEditing={() => this.props.signIn(this.state.email, this.state.password)}
                       onChangeText={(password) => this.setState({password})}
            />

            <Button onPress={this.props.signIn.bind(this, this.state.email, this.state.password)} title="Sign in / Sign up" />
            <Button onPress={this.close.bind(this)} title="Cancel" color="#ff0000" />
          </View>
        </BlurView>
      </Modal>
    )
  }
}
