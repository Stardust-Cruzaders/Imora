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
    paddingTop: 50,
  },
  imoraText: {
    fontWeight: '400',
    fontSize: 40,
    color: '#FFF',
  },
  feedButton: {
    alignItems: 'center',
    backgroundColor: '#7E57C2',
    padding: 10,
    margin: 15,
    marginTop: 50,
  },
  registerButton: {
    alignItems: 'center',  
    padding: 10,
    margin: 15,
    marginBottom: 50,
    borderRadius: 1001,
    backgroundColor: '#AAAA', 
    borderColor: "white",
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    margin: 15,
    borderRadius: 1000
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
    color: '#7E57C2',
    fontSize: 20,
    fontFamily: 'Roboto',
  },
  buttonText2: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Roboto',
  },
  imageBackground: {
    flex:1,
    resizeMode: 'cover'
  },
  logoImage: {
    height: 60,
    width:60,
  }
});

export default styles;
