import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEFF',

    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,

    paddingVertical: 5,
    alignContent: 'center',

    elevation: 5,
  },
  button: {
    flexDirection: 'row',

    backgroundColor: '#EEEEFF',

    borderRadius: 5,
  },
  avatar: {
    height: 80,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  avatarView: {
    width: '23%',
    margin: 5,
  },
  infoView: {
    flex: 1,
    marginLeft: 5,
  },
  name: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: 'black',
    fontSize: 18,
    textAlign: 'left',
    paddingTop: 5,
  },
  description: {
    fontFamily: 'Roboto',
    color: 'black',
    fontSize: 14,
    textAlign: 'left',
  },
});
export default styles;
