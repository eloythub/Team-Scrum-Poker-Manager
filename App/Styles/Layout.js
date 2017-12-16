import { Dimensions, StyleSheet } from 'react-native'
import { Constants } from 'expo'
import { ifIphoneX } from 'react-native-iphone-x-helper'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  statusBar: {
    width,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ffffff"
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrumContainer: {
    flex: 1
  },
  space: {
    margin: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIconButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10
  },
  imageWrapper: {
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageText: {
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'Helvetica Neue'
  },
  admob: {
    flex: 1,
    maxHeight: 50,
    alignItems: 'center',
    ...ifIphoneX({
      maxHeight: 90,
    })
  },
  waitingContainer: {
    zIndex: 99,
    width,
    height,
    position: 'absolute',
    top: 0,
    left: 0,
    //flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  waitingBlurView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
  }
})