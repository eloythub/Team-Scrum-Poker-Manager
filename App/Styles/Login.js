import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  description: {
    marginBottom: 16,
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Helvetica Neue'
  },
  transparentContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 20,
    alignItems: 'center'
  },
  textInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 10,
    minWidth: 200,
    borderRadius: 20,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Helvetica Neue'
  }
})