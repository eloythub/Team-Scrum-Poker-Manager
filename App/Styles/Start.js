import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  transparentContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 20,
    alignItems: 'center'
  },
  view: {
    alignItems: 'center'
  },
  qrCode: {
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  qrCodeTextTop: {
    padding: 10,
    fontWeight: 'bold'
  },
  qrCodeTextBottom: {
    padding: 10,
    fontSize: 20,
    fontWeight: '300',
    fontFamily: 'Helvetica Neue'
  },
  qrCodeReader: {
    height: 170,
    width: 170
  },
  textInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 10,
    minWidth: 200,
    borderRadius: 20,
    marginBottom: 10,
    textAlign: 'center'
  },
  separator: {
    width: 200,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginTop: 10,
    marginBottom: 10
  }
})