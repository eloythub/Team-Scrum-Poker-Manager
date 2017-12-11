import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated, Text, TouchableHighlight, View } from 'react-native'
import _ from 'lodash'
import ScrumStyle from '../Styles/Scrum'

// const CARD_ASPECT_RATIO = 400 / 558;

class Card extends Component {
  static propTypes = {
    value: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.object,
    textStyle: PropTypes.object,
  }

  render () {
    const viewStyles = _.omit(this.props.style, "fontSize")
    const textStyles = {fontSize: this.props.style.fontSize}

    return (
      <TouchableHighlight
        ref={ component => this._root = component }
        style={ [ScrumStyle.cardContainer, viewStyles] }
        onPress={ () => this.props.onPress(this.props.value) }>
        <View style={ ScrumStyle.card }>
          <Text style={ [ScrumStyle.text, textStyles] }>
            { this.props.value }
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const AnimatedCard = Animated.createAnimatedComponent(Card)

export default AnimatedCard