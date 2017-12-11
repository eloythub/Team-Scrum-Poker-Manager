import { Dimensions, StyleSheet } from 'react-native'
import { Constants } from 'expo'

const {width, height} = Dimensions.get('window')

function getRandomColor () {
  function randomCodeColor () {
    return parseInt(Math.random() * (255 - 40)) - 40
  }

  return `rgba(${randomCodeColor()}, ${randomCodeColor()}, ${randomCodeColor()}, 0.8)`
}

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
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  backendModalTouch: {
    //flex: 1
  },
  objectModalTouch: {
    //flex: 1
  },
  imageWrapper: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: getRandomColor(),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})