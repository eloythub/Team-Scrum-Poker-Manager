import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, Button, Alert } from 'react-native'
import SessionStatusStyle from '../Styles/SessionStatus'
import UserImage from '../Components/UserImage'

export default class SessionStatus extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  static defaultProps = {
    style: {}
  }

  static propProps = {
    height: PropTypes.number,
    session: PropTypes.object,
    onSignOut: PropTypes.func
  }

  componentWillReceiveProps () {
    this.setState({})
  }

  signOut () {
    Alert.alert(
      'Would you like to Sign out?',
      '',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'SignOut', onPress: this.props.onSignOut.bind(this)},
      ],
      { cancelable: true }
    )
  }

  render () {
    const {session = null, user = null} = this.props

    if (!user) {
      return null
    }

    return (
      <View style={[SessionStatusStyle.container, {height: this.props.height}]}>
        <View style={SessionStatusStyle.image}>
          <UserImage user={user} onPress={this.signOut.bind(this)}/>
        </View>
        <View style={SessionStatusStyle.info}>
          {
            user
              ? <Text>
              Name: {user.name}
            </Text>
              : null
          }
          {
            session
              ? <Text>
              Session: {session.sessionName}
            </Text>
              : null
          }
        </View>
        {
          session
            ? <View style={SessionStatusStyle.action}>
            <Button title="Start Voting !" color="red" onPress={() => {}}/>
          </View>
            : null
        }
      </View>
    )
  }
}