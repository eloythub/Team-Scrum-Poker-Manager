import React from 'react'
import BaseService from './BaseService'

export default class SessionService extends BaseService {
  static startNewSession (user, sessionId, sessionName) {
    let members = {}

    members[user.name.toLowerCase()] = null

    let sessionStructure = {
      sessionId,
      sessionName,
      members: JSON.stringify(members)
    }

    this.sessionRef(`${sessionName.toLowerCase()}-${sessionId}`).set(sessionStructure)
  }

  static async join (user, sessionId, sessionName) {
    let sessionData = await this.sessionRef(`${sessionName.toLowerCase()}-${sessionId}`).once('value')

    if (!sessionData) {
      throw new Error('no session has found')
    }

    sessionData                                  = sessionData.val()
    sessionData.members                          = JSON.parse(sessionData.members)
    sessionData.members[user.name.toLowerCase()] = null
    sessionData.members                          = JSON.stringify(sessionData.members)

    this.sessionRef(`${sessionName.toLowerCase()}-${sessionId}`).set(sessionData)
  }

  static async end (user, sessionId, sessionName) {
    let sessionData = await this.sessionRef(`${sessionName.toLowerCase()}-${sessionId}`).once('value')

    if (!sessionData) {
      throw new Error('no session has found')
    }

    sessionData         = sessionData.val()
    sessionData.members = JSON.parse(sessionData.members)

    delete sessionData.members[user.name.toLowerCase()]

    if (Object.keys(sessionData.members).length === 0) {
      return this.sessionRef(`${sessionName.toLowerCase()}-${sessionId}`).remove()
    }

    sessionData.members = JSON.stringify(sessionData.members)

    this.sessionRef(`${sessionName.toLowerCase()}-${sessionId}`).set(sessionData)
  }

  static async selectCard (user, sessionId, sessionName, cardValue) {
    let sessionData = await this.sessionRef(`${sessionName.toLowerCase()}-${sessionId}`).once('value')

    if (!sessionData) {
      throw new Error('no session has found')
    }

    sessionData                                  = sessionData.val()
    sessionData.members                          = JSON.parse(sessionData.members)
    sessionData.members[user.name.toLowerCase()] = cardValue
    sessionData.members                          = JSON.stringify(sessionData.members)

    this.sessionRef(`${sessionName.toLowerCase()}-${sessionId}`).set(sessionData)
  }

  static async refreshSession (sessionId, sessionName) {
    let sessionData = await this.sessionRef(`${sessionName.toLowerCase()}-${sessionId}`).once('value')

    if (!sessionData) {
      throw new Error('no session has found')
    }

    sessionData         = sessionData.val()
    sessionData.members = JSON.parse(sessionData.members)

    Object.keys(sessionData.members).forEach((key) => {
      sessionData.members[key] = null
    })

    sessionData.members = JSON.stringify(sessionData.members)

    this.sessionRef(`${sessionName.toLowerCase()}-${sessionId}`).set(sessionData)
  }

  static async getResults (sessionId, sessionName) {
    let sessionData = await this.sessionRef(`${sessionName.toLowerCase()}-${sessionId}`).once('value')

    if (!sessionData) {
      throw new Error('no session has found')
    }

    sessionData = sessionData.val()

    if (!sessionData) {
      return {}
    }

    return JSON.parse(sessionData.members)
  }
}
