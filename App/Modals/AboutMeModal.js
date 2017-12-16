import React from 'react'
import { Alert, Button, Linking, Platform, ScrollView, Text, TouchableOpacity, View, Clipboard } from 'react-native'
import { AdMobBanner, BlurView } from 'expo'
import ucfirst from 'ucfirst'
import isUrl from 'is-url'
import { config } from '../package.json'
import Modal from '../Components/Modal'
import BaseModal from './BaseModal'
import LayoutStyle from '../Styles/Layout'
import AboutMeStyle from '../Styles/AboutMe'

export default class AboutMeModal extends BaseModal {
  copyToClipboard (address) {
    Clipboard.setString(address)

    Alert.alert(`"${address}" has been copied.`)
  }

  openInBrowser (url) {
    Linking.openURL(url)
  }

  renderDonation () {
    const donationChannels = {
      paypal: 'https://paypal.me/MahanHazrati',
      bitcoin: '3Az7t8VnVSaTBGs76GyRGP9wM8MH1bdkpR',
      ethereum: '0x2EDaCf35bDC1A47Ec43Fc126ddDe47Fb963515D1',
      Litecoin: 'Li4bHaZXpGZkX8Xyg9Zn1fYpUqSeiwPHUo',
      dash: 'Xaod5CMQQkdjEMcuSnNwMomMjgaNfQ7HcM',
      ripple: 'Li4bHaZXpGZkX8Xyg9Zn1fYpUqSeiwPHUo'
    }

    return (
      <ScrollView>
        {Object.keys(donationChannels).map((key, index) => {
          return (
            <View key={index}>
              <Text style={AboutMeStyle.supportChannel}>{ucfirst(key)}</Text>
              <TouchableOpacity onPress={() => {
                isUrl(donationChannels[key])
                  ? this.openInBrowser(donationChannels[key])
                  : this.copyToClipboard(donationChannels[key])
              }}>
                <Text style={AboutMeStyle.supportChannelAddress}>{donationChannels[key]}
                </Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
    )
  }

  render () {
    return (
      <Modal ref={ref => this.modal = ref}
             animationType="fade"
             hardwareAccelerated={false}
             transparent={true}>
        <BlurView tint="dark"
                  intensity={80}
                  style={LayoutStyle.modalContainer}>
          <View style={AboutMeStyle.transparentContainer}>
            <AdMobBanner
              bannerSize="banner"
              adUnitID={config.admob['about-me-modal-ad'][Platform.OS]}
              didFailToReceiveAdWithError={(e) => console.log('about-me-modal-ad:', e)}/>
            <View style={LayoutStyle.space}/>
            <Text style={AboutMeStyle.description}>
              Scrum Poker Manager
            </Text>
            <View style={AboutMeStyle.aboutMeWrapper}>
              <Text style={AboutMeStyle.aboutMeTextTnx}>Thanks for using our app{'\n'}</Text>
              <Text style={AboutMeStyle.aboutMeText}>By using this app you can simply manage the scrum poker session at your company and points for tasks.{'\n'}</Text>
              <Text style={AboutMeStyle.aboutMeText}>Invite members to your session and have an easier experience through your sprint planning.{'\n'}</Text>
              <Text style={AboutMeStyle.aboutMeText}>We are working around the clock to develop more and better useful
                apps for you.{'\n'}</Text>
              <Text style={AboutMeStyle.aboutMeText}>We really appreciate if you kindly support us through the channels
                below:</Text>
            </View>
            <View style={AboutMeStyle.supportWrapper}>
              {this.renderDonation()}
            </View>
            {/*<Button onPress={this.refresh.bind(this)} title="Renew" color="green"/>*/}
            <Button onPress={this.close.bind(this)} title="Close" color="#ff0000"/>
          </View>
        </BlurView>
      </Modal>
    )
  }
}
