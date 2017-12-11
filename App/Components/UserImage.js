import React from 'react'
import LayoutStyle from '../Styles/Layout'
import { Text, TouchableOpacity, View } from 'react-native'

export default class UserImage extends React.Component {
  async componentWillReceiveProps () {
    await this.setState({})
  }

  render () {
    const {user} = this.props

    if (!user) {
      return null
    }

    return (
      <TouchableOpacity onPress={this.props.onPress.bind(this)}>
        <View style={LayoutStyle.imageWrapper}>
          <Text style={LayoutStyle.imageText}>{user.name.substring(0, 2).toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
