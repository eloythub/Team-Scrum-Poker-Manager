import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import LayoutStyle from '../Styles/Layout'
import Color from 'color'

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

      const randomColor = Color({r, g, b}).alpha(0.8)

      // if luma was less than 40 => pick another color
      if (randomColor.dark()) {
        return pickRgb()
      }

      const [red, green, blue] = randomColor.color

      return `rgba(${red}, ${green}, ${blue}, ${randomColor.valpha})`
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
