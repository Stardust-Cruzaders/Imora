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
    alignContent: 'space-between',
    marginVertical: 10,
    marginLeft: 5,
  },
  houseButtonView: {
    marginHorizontal: 25,
  },
  name: {
    color: '#3f3f3f',

    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  buttonView: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  toggleButton: {},
  deleteButton: {},
});
export default styles;
