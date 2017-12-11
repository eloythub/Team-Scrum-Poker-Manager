import LocalStorage from './LocalStorage'
import {enums} from '../package.json'

export default class Session {
  static async join (sessionId, sessionName) {
    await LocalStorage.save(enums.sessionData, {
      sessionId,
      sessionName
    })
  }

  static async end () {
    await LocalStorage.unload(enums.sessionData)
  }

  static async getSession () {
    const session = await LocalStorage.load(enums.sessionData)

    return session
  }
}
