import React from 'react'
import { Alert } from 'react-native'
import UserFactory from '../Factories/User'
import SessionService from '../Services/SessionService'
import SessionFactory from '../Factories/Session'
import BaseController from './BaseController'

export default class HomeController extends BaseController {
  async componentDidMount () {
    const user    = await UserFactory.getUser()
    const session = await SessionFactory.getSession()

    await this.setState({user, session})
  }

  componentWillReceiveProps () {
    this.setState({})
  }

  start () {
    const {user} = this.state

    if (user) {
      return this.startModal.open()
    }

    this.signInModal.open()
  }

  aboutMe () {
    //this.aboutMeModal.open()
  }

  async signIn (name) {
    await global.waitingRef.open()

    await UserFactory.signIn(name)

    await this.setState({
      user: {
        name
      }
    })

    await this.startModal.open()

    await global.waitingRef.close()
  }

  async signOut () {
    await global.waitingRef.open()

    await this.endSession()

    await UserFactory.signOut()

    await this.setState({user: null})

    await global.waitingRef.close()
  }

  async startNewSession ({sessionId, sessionName}) {
    const {user} = this.state

    await global.waitingRef.open()

    try {
      await SessionService.startNewSession(user, sessionId, sessionName)

      await SessionFactory.join(sessionId, sessionName)

      await this.setState({
        session: {
          sessionId,
          sessionName
        }
      })

      await global.waitingRef.close()

      return true
    } catch (e) {
      Alert.alert('something went wrong, try again please')
    } finally {
      await global.waitingRef.close()
    }
  }

  async refreshSession () {
    await global.waitingRef.open()

    try {
      const {session}                = this.state
      const {sessionId, sessionName} = session

      await SessionService.refreshSession(sessionId, sessionName)

      await global.waitingRef.close()

      return true
    } catch (e) {
      Alert.alert('something went wrong, try again please')
    } finally {
      await global.waitingRef.close()
    }
  }

  async endSession () {
    const {user, session} = this.state

    await global.waitingRef.open()

    try {
      if (session) {
        const {sessionId, sessionName} = session
        await SessionService.end(user, sessionId, sessionName)
      }

      await SessionFactory.end()

      await this.setState({session: null})

      await global.waitingRef.close()

      return true
    } catch (e) {
      Alert.alert('something went wrong, try again please')
    } finally {
      await global.waitingRef.close()
    }
  }

  async joinSession (sessionName, sessionId) {
    await global.waitingRef.open()

    try {
      const {user} = this.state

      await SessionService.join(user, sessionId, sessionName)

      await SessionFactory.join(sessionId, sessionName)

      await this.setState({
        session: {
          sessionId,
          sessionName
        }
      })

      await global.waitingRef.close()

      return true
    } catch (e) {
      Alert.alert('something went wrong, try again please')
    } finally {
      await global.waitingRef.close()
    }
  }

  async selectCard (cardValue) {
    const {user, session} = this.state

    if (!user || !session) {
      return
    }

    const {sessionId, sessionName} = session

    await SessionService.selectCard(user, sessionId, sessionName, cardValue)
  }

  async result () {
    const {user, session} = this.state

    await global.waitingRef.open()

    if (!user || !session) {
      await global.waitingRef.close()

      return
    }

    const {sessionId, sessionName} = session

    const members = await SessionService.getResults(sessionId, sessionName)

    let membersResult = []

    Object.keys(members).forEach((userName) => {
      membersResult.push({
        name: userName,
        cardValue: members[userName]
      })
    })

    await this.setState({membersResult})

    await this.resultModal.open()

    await global.waitingRef.close()
  }
}