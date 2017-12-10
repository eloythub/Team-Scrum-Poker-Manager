import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import Icons from '@expo/vector-icons'
import LayoutStyle from '../Styles/Layout'

export default class HeaderIconButton extends React.Component {
  static defaultProps = {
    iconSource: 'Ionicons'
  }

  static propTypes = {
    icon: PropTypes.string,
    size: PropTypes.number,
    onPress: PropTypes.func,
    iconSource: PropTypes.string
  }

  render () {
    const Icon = Icons[this.props.iconSource]

    return (
      <TouchableOpacity style={LayoutStyle.headerIconButton} onPress={this.props.onPress.bind(this)}>
        <Icon name={this.props.icon} size={this.props.size || 26} color="black"/>
      </TouchableOpacity>
    )
  }
}