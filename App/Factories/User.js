import LocalStorage from './LocalStorage'
import {enums} from '../package.json'

export default class User {
  static async signIn (name) {
    await LocalStorage.save(enums.userData, {
      name
    })
  }

  static async signOut () {
    await LocalStorage.unload(enums.userData)
  }

  static async getUser () {
    const user = await LocalStorage.load(enums.userData)

    return user
  }
}
