import {Dimensions, StyleSheet} from 'react-native';
const d = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7E57C2',
  },
  fontTitle: {
    fontFamily: 'Roboto',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '400',
    color: '#FFF',
    marginBottom: 10,
    marginHorizontal: 25,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 150,
  },
  whiteBox: {
    alignSelf: 'center',
    width: 280,
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingHorizontal: 24,
    paddingVertical: 24,
    marginTop: 150
  },
  buttonStyle: {
    borderRadius: 5,
    backgroundColor: '#26E07C',
    padding: 10,
  },
  textButton: {
    fontFamily: 'Roboto',
    fontSize: 26,
    color: '#FFF',
    textAlign: 'center',
  },
  imageBackground: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    width: d.width,
    height: d.height,
  },
  form: {
    marginBottom: 25,
  },
  input: {
    backgroundColor: 'transparent',
    height: 50,
    marginVertical: 5,
  },
});

export default styles;
