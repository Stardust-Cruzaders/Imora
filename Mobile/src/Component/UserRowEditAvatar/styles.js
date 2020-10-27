import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: -10,

    alignContent: 'center',

    width: '100%',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  avatar: {
    height: 100,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  avatarView: {
    width: '27%',
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
