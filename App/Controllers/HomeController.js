import React from 'react'
import UserFactory from '../Factories/User'
import SessionFactory from '../Factories/Session'
import BaseController from './BaseController'

export default class HomeController extends BaseController {
  async componentDidMount () {
    const user = await UserFactory.getUser()
    const session = await SessionFactory.getSession()

    await this.setState({user, session})
  }

  componentWillReceiveProps () {
    this.setState({})
  }

  async signIn (name) {
    await this.setState({
      user: {
        name
      }
    })

    await UserFactory.signIn(name)

    await this.startModal.open()
  }

  async signOut () {
    await this.endSession()

    await this.setState({user: null})

    await UserFactory.signOut()
  }

  start () {
    const {user} = this.state

    if (user) {
      return this.startModal.open()
    }

    this.signInModal.open()
  }

  async startNewSession ({sessionId, sessionName}) {
    await this.setState({session: {
      sessionId,
      sessionName
    }})

    await SessionFactory.join(sessionId, sessionName)
  }

  async endSession () {
    await this.setState({session: null})
    await SessionFactory.end()
  }

  async joinSession (sessionName, sessionId) {
    await this.setState({session: {
      sessionId,
      sessionName
    }})

    await SessionFactory.join(sessionId, sessionName)
  }
}