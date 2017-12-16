import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  transparentContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 20,
    alignItems: 'center'
  },
  description: {
    marginBottom: 16,
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Helvetica Neue'
  },
  view: {
    alignItems: 'center'
  },
  aboutMeWrapper: {
    width: 300,
    paddingLeft: 5,
    paddingRight: 5,
  },
  aboutMeTextTnx: {
    fontWeight: '500',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center'
  },
  aboutMeText: {
    fontWeight: '400',
    fontFamily: 'Helvetica Neue'
  },
  supportWrapper: {
    height: 120,
    marginBottom: 20
  },
  supportChannel: {
    marginTop: 20,
    marginBottom: 5,
    fontWeight: '500',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center'
  },
  supportChannelAddress: {
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Helvetica Neue',
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center'
  }
})