import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDE0E3',
    flex: 1,
  },
  headerNav: {
    flexDirection: 'row',
    margin: 20,
  },
  bottomTabNav: {
    backgroundColor: '#7E57C2',
    height: 50,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#7E57C2',
  },
  filterButtonStyle: {
    backgroundColor: '#3F3F3F',
    borderRadius: 1000,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 15,
  },
  textFormatation: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#FFF',
  },
});

export default styles;
