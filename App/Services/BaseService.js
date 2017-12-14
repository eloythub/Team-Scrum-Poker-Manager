import React from 'react'
import * as firebase from 'firebase';
import {config} from '../package.json'

firebase.initializeApp({
  serviceAccount: '../team-scrum-poker-manager-b4ce5fb5169b.json',
  databaseURL: config.firebase.databaseURL
})

export default class BaseService {
  static db () {
    return firebase.database()
  }

  static sessionRef (ref) {
    return this.db().ref('/').child(`sessions/${ref}`)
  }
}