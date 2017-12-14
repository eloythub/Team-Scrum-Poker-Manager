import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import LayoutStyle from './Styles/Layout'
import {BlurView} from 'expo'

export default class Waiting extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isWaiting: false
    }
  }

  open () {
    this.setState({isWaiting: true})
  }

  close () {
    this.setState({isWaiting: false})
  }

  render () {
    const {isWaiting} = this.state

    if (!isWaiting) {
      return null
    }

    return (
      <View style={LayoutStyle.waitingContainer}>
        <BlurView tint="light"
                  intensity={80}
                  style={LayoutStyle.waitingBlurView}>
          <ActivityIndicator color="#000"
                             size="large"/>
        </BlurView>
      </View>
    )
  }
}
