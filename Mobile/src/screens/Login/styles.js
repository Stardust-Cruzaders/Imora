import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7E57C2',
  },
  whiteBox: {
    width: 280,
    height: 320,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  headerAlign: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 20,
  },
  imoraText: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#FFF',
  },
  feedButton: {
    alignItems: 'center',
    backgroundColor: '#7E57C2',
    padding: 10,
    margin: 15,
    marginTop: 50,
  },
  googleButton: {
    alignItems: 'center',
    backgroundColor: '#CB2F2F',
    padding: 10,
    margin: 15,
    marginBottom: 50,
  },
  facebookButton: {
    backgroundColor: '#0075FF',
    padding: 10,
    margin: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  facebookIcon: {
    alignSelf: 'center',
    marginRight: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Roboto',
  },
});

export default styles;
