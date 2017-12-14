import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import LayoutStyle from '../Styles/Layout'
import UserFactory from '../Factories/User'

export default class UserImage extends React.Component {
  async componentWillReceiveProps () {
    await this.setState({})
  }

  getRandomColor (userName) {
    function randomCodeColor () {
      return parseInt(Math.random() * (255 - 40)) - 40
    }

    function pickRgb () {
      const r = randomCodeColor()
      const g = randomCodeColor()
      const b = randomCodeColor()

      // if luma was less than 40 => pick another color
      if (0.2126 * r + 0.7152 * g + 0.0722 * b < 50) {
        return pickRgb()
      }

      return `rgba(${r}, ${g}, ${b}, 0.8)`
    }

    if (!global.hasOwnProperty('userColors')) {
      global.userColors = {}
    }

    if (global.userColors.hasOwnProperty(userName)) {
      return global.userColors[userName]
    }

    global.userColors[userName] = pickRgb()

    return global.userColors[userName]
  }

  render () {
    const {user} = this.props

    if (!user) {
      return null
    }

    return (
      <TouchableOpacity onPress={this.props.onPress.bind(this)}>
        <View style={[LayoutStyle.imageWrapper, {
          backgroundColor: this.getRandomColor(user.name.toLowerCase()),
        }]}>
          <Text style={LayoutStyle.imageText}>{user.name.substring(0, 2).toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
