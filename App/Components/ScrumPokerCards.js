import _ from 'lodash'
import React from 'react'
import { Animated, View } from 'react-native'
import ScrumStyle from '../Styles/Scrum'
import SessionStatus from '../Components/SessionStatus'
import Card from './Card'

const CARD_VALUES = [
  "0", "½", "1",
  "2", "3", "5",
  "8", "13", "20",
  "40", "100", "?",
  "∞", "☕"
]

const sessionStateHeight = 60

export default class ScrumPokerCards extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedCard: null,
      cards: []
    }
  }

  async componentWillReceiveProps () {
    await this.setState({})
  }

  render () {
    if (_.isEmpty(this.state.cards)) {
      return (
        <View onLayout={ this.onLayout.bind(this) } style={ScrumStyle.flex}/>
      )
    }

    const cards = this.state.cards.map((card, i) => {
      return (
        <Card key={ i }
              value={ card.value }
              onPress={ this.onCardPressed.bind(this) }
              style={{
                left: card.x,
                top: card.y,
                width: card.width,
                height: card.height,
                opacity: card.opacity,
                zIndex: card.zIndex,
                fontSize: card.fontSize,
                position: 'absolute'
              }}
        />
      )
    })

    return (
      <View>
        <SessionStatus {...this.props} height={sessionStateHeight}/>
        <View style={ ScrumStyle.container}>
          { cards }
        </View>
      </View>
    )
  }

  onCardPressed (cardValue) {
    const pressedCard = _.find(this.state.cards, c => c.value === cardValue)

    if (this.state.selectedCard === cardValue) {
      this.state.cards.forEach(card => {
        if (card === pressedCard) {
          const coords = this._getCardCoordinates(cardValue)

          Animated.parallel([
            Animated.timing(card.x, {toValue: coords.x, duration: 200}),
            Animated.timing(card.y, {toValue: coords.y, duration: 200}),
            Animated.timing(card.width, {toValue: coords.width, duration: 200}),
            Animated.timing(card.height, {toValue: coords.height, duration: 200}),
            Animated.timing(card.fontSize, {toValue: 40, duration: 200}),
          ]).start()
        } else {
          Animated.timing(card.opacity, {
            toValue: 1,
            duration: 200
          }).start()
        }
      })

      this.state.cards.forEach(card => {
        Animated.timing(card.opacity, {
          toValue: 1,
          duration: 200
        }).start()
      })

      this.setState({selectedCard: null})

    } else {
      this.props.onSelectCard(cardValue)

      this.state.cards.forEach(card => {
        if (card === pressedCard) {
          const coords = this._getSelectedCardCoordinates()

          Animated.parallel([
            Animated.timing(card.x, {toValue: coords.x, duration: 200}),
            Animated.timing(card.y, {toValue: coords.y, duration: 200}),
            Animated.timing(card.width, {toValue: coords.width, duration: 200}),
            Animated.timing(card.height, {toValue: coords.height, duration: 200}),
            Animated.timing(card.zIndex, {toValue: 1, duration: 0}),
            Animated.timing(card.fontSize, {toValue: 150, duration: 200}),
          ]).start()
        } else {
          Animated.parallel([
            Animated.timing(card.opacity, {toValue: 0, duration: 200}),
            Animated.timing(card.zIndex, {toValue: 0, duration: 0}),
          ]).start()
        }
      })

      this.setState({selectedCard: cardValue})
    }
  }

  onLayout (e) {
    const layout = e.nativeEvent.layout
    this.width   = layout.width
    this.height  = layout.height - sessionStateHeight

    const cardCoords = CARD_VALUES.map(cardValue => {
      const coords = this._getCardCoordinates(cardValue)

      return Object.assign({
        value: cardValue,
        opacity: new Animated.Value(1),
        zIndex: new Animated.Value(0),
        fontSize: new Animated.Value(40),
      }, _.mapValues(coords, x => new Animated.Value(x)))
    })

    this.setState({
      cards: cardCoords
    })
  }

  _getCardCoordinates (cardValue) {
    const incX = this.width / 3
    const incY = this.height / 5
    const idx  = CARD_VALUES.indexOf(cardValue)

    return {
      x: (idx % 3) * incX + 10,
      y: Math.floor(idx / 3) * incY + 10,
      width: incX - 20,
      height: incY - 20,
    }
  }

  _getSelectedCardCoordinates () {
    return {
      x: 20,
      y: 20,
      width: this.width - 40,
      height: this.height - 40
    }
  }
}
