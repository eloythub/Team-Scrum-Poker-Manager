import React from 'react'

export default class BaseModal extends React.Component{
  open () {
    this.modal.open()
  }

  close () {
    this.modal.close()
  }
}