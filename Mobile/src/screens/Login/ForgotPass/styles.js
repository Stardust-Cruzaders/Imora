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
    justifyContent: 'space-evenly',
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
    fontSize: 16,
    fontWeight: '600',
    fontFamily:'Roboto',
    textAlign: 'center',
    marginHorizontal: 15
  },
  buttonStyle: {
      backgroundColor: '#FFA113',
      borderRadius: 5,
      padding: 20
  },
  buttonFont: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: '500',
    textAlign: 'center'
  }

});

export default styles;
