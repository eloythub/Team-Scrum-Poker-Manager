import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingTop: 9,
    paddingLeft: 9,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    flexDirection: 'row'
  },
  image: {
    width: 50,
  },
  info: {
    flex: 1,
    marginLeft: 5,
    marginTop: 2,
    flexDirection: 'column'
  },
  action: {
    flex: 1,
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 2,
    marginRight: 2,
    flexDirection: 'column'
  }
})