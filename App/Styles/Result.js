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
  resultView: {
    width: 200,
    minHeight: 50,
    maxHeight: 200
  },
  image: {
    width: 50,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  userView: {
    flexDirection: 'row',
    marginBottom: 10
  },
  userName: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  userCardValue: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  userNameText: {
    fontSize: 20,
    fontWeight: '300',
    fontFamily: 'Helvetica Neue'
  },
  cardValueText: {
    fontSize: 28,
    fontWeight: '400',
    fontFamily: 'Helvetica Neue'
  }
})