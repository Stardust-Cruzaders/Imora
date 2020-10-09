import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginBottom: 25,

    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 25,

    borderRadius: 10,
  },
  residenceView: {
    flexDirection: 'row',
    marginVertical: 10,

    width: '100%',

    justifyContent: 'space-between',
  },
  houseButtonView: {
    marginHorizontal: 25,
    width: 250,
  },
  name: {
    color: '#3f3f3f',

    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  isAvailableText: {
    fontSize: 14,
    fontFamily: 'Roboto',
  },
  buttonView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  configButton: {
    marginRight: 15,
  },
});
export default styles;
