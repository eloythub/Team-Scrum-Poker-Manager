import { Dimensions, StyleSheet } from 'react-native'
import { Constants } from 'expo'

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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    //paddingLeft: 5,
    //paddingRight: 5
  },
  headerIconButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10
  }
})