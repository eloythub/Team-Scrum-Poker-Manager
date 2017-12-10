import React from 'react'

import * as firebase from 'firebase';

export default class BaseService {
  static db () {
    return firebase.database()
  }
}