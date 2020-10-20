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
  fontTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#FFF',
  },
  fontBox: {
    fontSize: 25,
    fontWeight: '500',
    fontFamily:'Roboto'
  },
  buttonStyle: {
      backgroundColor: '#FFA113',
      borderRadius: 5,
  },
  buttonFont: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: '500',
    textAlign: 'center'
  }

});

export default styles;
