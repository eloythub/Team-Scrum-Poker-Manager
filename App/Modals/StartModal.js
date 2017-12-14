import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Button, KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native'
import { AdMobBanner, BarCodeScanner, BlurView, Permissions } from 'expo'
import { config } from '../package.json'
import QRCode from 'react-native-qrcode'
import Modal from '../Components/Modal'
import BaseModal from './BaseModal'
import LayoutStyle from '../Styles/Layout'
import StartStyle from '../Styles/Start'

export default class StartModal extends BaseModal {
  static propTypes = {
    start: PropTypes.func,
    end: PropTypes.func,
    join: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.state = {
      sessionId: '',
      sessionName: '',
      hasCameraPermission: null,
      isQrProcessing: false,
    }
  }

  async componentWillReceiveProps (props) {
    if (props.session) {
      await this.setState({
        sessionId: props.session.sessionId,
        sessionName: props.session.sessionName,
      })
    }

    await this.setState({})
  }

  async componentDidMount () {
    let {status} = await Permissions.getAsync(Permissions.CAMERA)

    if (status === 'granted') {
      this.setState({hasCameraPermission: true})
    }
  }

  getRandom (min, max) {
    return parseInt(Math.random() * (max - min) + min)
  }

  async scan () {
    let {status} = await Permissions.getAsync(Permissions.CAMERA)

    if (status !== 'granted') {
      let {status} = await Permissions.askAsync(Permissions.CAMERA)
    }

    this.setState({hasCameraPermission: status === 'granted'})
  }

  async qrCodeDetect ({data}) {
    const {isQrProcessing} = this.state

    if (isQrProcessing) {
      return
    }

    const [sessionName = '', sessionId = ''] = data.split('-')

    if (!sessionName || !sessionId) {
      return
    }

    await this.setState({
      isQrProcessing: true
    })

    await this.props.join(sessionName, sessionId)

    await this.setState({
      isQrProcessing: false
    })
  }

  async startNewSession () {
    let {sessionId, sessionName} = this.state

    if (!sessionName) {
      return Alert.alert('Session name is mandatory')
    }

    sessionId = this.getRandom(100000000000, 9999999999)

    const startResult = await this.props.start({
      sessionId,
      sessionName
    })

    if (!startResult) {
      return
    }

    await this.setState({
      sessionId,
      sessionName
    })
  }

  async endSession () {
    const endResult = await this.props.end()

    if (!endResult) {
      return
    }

    await this.setState({
      sessionId: '',
      sessionName: ''
    })
  }

  renderJoin () {
    const {hasCameraPermission} = this.state
    const {session}             = this.props

    if (session) {
      return null
    }

    if (!hasCameraPermission) {
      return (
        <View>
          <Text>Waiting for camera's permission</Text>
          <Button onPress={this.scan.bind(this)} title="Scan With Camera"/>
        </View>
      )
    }

    return (
      <View style={StartStyle.view}>
        <BarCodeScanner
          onBarCodeRead={this.qrCodeDetect.bind(this)}
          style={StartStyle.qrCodeReader}
        />

        <View style={StartStyle.separator}/>
      </View>
    )
  }

  renderQrCode () {
    const {sessionId, sessionName} = this.state

    if (!this.props.session) {
      return null
    }

    return (
      <View style={StartStyle.qrCode}>
        <QRCode
          value={`${sessionName}-${sessionId}`}
          size={150}
          bgColor='black'
          fgColor='white'/>
        <Text style={StartStyle.qrCodeTextBottom}>{sessionId}</Text>
      </View>
    )
  }

  render () {
    const {sessionName} = this.state

    return (
      <Modal ref={ref => this.modal = ref}
             animationType="fade"
             hardwareAccelerated={false}
             transparent={true}>
        <BlurView tint="dark"
                  intensity={80}
                  style={LayoutStyle.modalContainer}>
          <KeyboardAvoidingView behavior="padding">
            <View style={StartStyle.transparentContainer}>
              <AdMobBanner
                bannerSize="banner"
                adUnitID={config.admob['start-modal-ad'][Platform.OS]}
                didFailToReceiveAdWithError={(e) => console.log('start-modal-ad:', e)}/>
              <View style={LayoutStyle.space} />
              {this.renderJoin()}

              <TextInput placeholder="Session Name"
                         caption="Session Name"
                         defaultValue={sessionName}
                         editable={!this.props.session}
                         allowFontScaling={true}
                         placeholderTextColor="#777777"
                         autoCorrect={false}
                         fontSize={16}
                         style={StartStyle.textInput}
                         returnKeyType="none"
                         onChangeText={(text) => this.setState({sessionName: text})}/>

              {this.renderQrCode()}

              {
                this.props.session
                  ? <Button onPress={this.endSession.bind(this)} title="End Session"/>
                  : <Button onPress={this.startNewSession.bind(this)} title="Start New Session"/>
              }
              <Button onPress={this.close.bind(this)} title="Close" color="#ff0000"/>
            </View>
          </KeyboardAvoidingView>
        </BlurView>
      </Modal>
    )
  }
}
