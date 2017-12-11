import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'
import Icons from '@expo/vector-icons'
import LayoutStyle from '../Styles/Layout'

export default class HeaderIconButton extends React.Component {
  static defaultProps = {
    iconSource: 'Ionicons'
  }

  static propTypes = {
    icon: PropTypes.string,
    size: PropTypes.number,
    leftText: PropTypes.string,
    rightText: PropTypes.string,
    onPress: PropTypes.func,
    iconSource: PropTypes.string
  }

  render () {
    const Icon = Icons[this.props.iconSource]

    return (
      <TouchableOpacity style={LayoutStyle.headerIconButton} onPress={this.props.onPress.bind(this)}>
        <Text style={LayoutStyle.leftText}>{this.props.leftText}</Text>
        <Icon name={this.props.icon} size={this.props.size || 26} color="black"/>
        <Text style={LayoutStyle.rightText}>{this.props.rightText}</Text>
      </TouchableOpacity>
    )
  }
}