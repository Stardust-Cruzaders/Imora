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
    justifyContent: 'space-around',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  fontTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#FFF',
    marginBottom: 5
  },
  fontBox: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily:'Roboto',
    textAlign: 'center',
    marginHorizontal: 15,
    borderBottomWidth: 1,
    marginBottom: 5

  },
  buttonStyle: {
      backgroundColor: '#26E07C',
      borderRadius: 5,
      padding: 15
  },
  buttonFont: {
    fontSize: 25,
    color: "#FFF",
    fontWeight: '500',
    textAlign: 'center'
  },
  fontHighlight: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily:'Roboto',
    textAlign: 'center',
    marginHorizontal: 15,
    color: 'orange'
  }

});

export default styles;
