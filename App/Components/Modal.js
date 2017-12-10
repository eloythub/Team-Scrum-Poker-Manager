import React from 'react'
import ReactNative from 'react-native'

export default class Modal extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isVisible: false
    }
  }

  static defaultProps = {
    style: {}
  }

  open () {
    this.setState({isVisible: true})
  }

  close () {
    this.setState({isVisible: false})
  }

  render () {
    return (
      <ReactNative.Modal visible={this.state.isVisible }
                         onRequestClose={() => this.setState({isVisible: false})}
                         {...this.props}>
        {this.props.children}
      </ReactNative.Modal>
    )
  }
}