import React from 'react'
import PropTypes from 'prop-types'
import { Button, Platform, ScrollView, Text, View } from 'react-native'
import { AdMobBanner, BlurView } from 'expo'
import { config } from '../package.json'
import Modal from '../Components/Modal'
import BaseModal from './BaseModal'
import LayoutStyle from '../Styles/Layout'
import UserImage from '../Components/UserImage'
import ResultStyle from '../Styles/Result'
import ucfirst from 'ucfirst'

export default class ResultModal extends BaseModal {
  static defaultProps = {
    members: []
  }

  static propTypes = {
    refresh: PropTypes.func,
    members: PropTypes.array
  }

  componentWillReceiveProps () {
    this.setState({})
  }

  refresh () {
    this.props.refresh()

    this.close()
  }

  render () {
    const {members} = this.props

    return (
      <Modal ref={ref => this.modal = ref}
             animationType="fade"
             hardwareAccelerated={false}
             transparent={true}>
        <BlurView tint="dark"
                  intensity={80}
                  style={LayoutStyle.modalContainer}>
          <View style={ResultStyle.transparentContainer}>
            <AdMobBanner
              bannerSize="banner"
              adUnitID={config.admob['result-modal-ad'][Platform.OS]}
              didFailToReceiveAdWithError={(e) => console.log('result-modal-ad:', e)}/>
            <View style={LayoutStyle.space}/>
            <Text style={ResultStyle.description}>
              Result
            </Text>
            <View style={ResultStyle.resultView}>
              <ScrollView>
                {

                  members.map((user, key) => {
                    return (
                      <View key={key} style={ResultStyle.userView}>
                        <View style={ResultStyle.image}>
                          <UserImage user={user} onPress={() => null}/>
                        </View>
                        <View style={ResultStyle.userName}>
                          <Text style={ResultStyle.userNameText}>{ucfirst(user.name)}</Text>
                        </View>
                        <View style={ResultStyle.userCardValue}>
                          <Text style={ResultStyle.cardValueText}>{user.cardValue}</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </ScrollView>
            </View>
            <Button onPress={this.refresh.bind(this)} title="Renew" color="green"/>
            <Button onPress={this.close.bind(this)} title="Close" color="#ff0000"/>
          </View>
        </BlurView>
      </Modal>
    )
  }
}
