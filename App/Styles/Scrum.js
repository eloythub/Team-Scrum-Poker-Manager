import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  cards: {
    flex: 1,
    paddingBottom: 100,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContainer: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#111111',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#111111',
    shadowRadius: 2,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    backgroundColor: '#ffffff',
    //marginTop: 10,
    //marginLeft: 10,
  },
  card: {
    alignSelf: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: '300',
    fontFamily: 'Helvetica Neue'
  }
})