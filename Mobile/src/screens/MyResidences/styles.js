import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  newResidenceView: {
    backgroundColor: '#F0F0F0',
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 15,
    marginBottom: -10,
    marginLeft: 45,
    paddingVertical: 10,
  },
  newResidenceButton: {
    flexDirection: 'row',
    alignContent: 'center',

    width: '100%',
  },
  houseIcon: {
    alignSelf: 'center',
  },
  newResidenceButtonText: {
    fontSize: 23,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#3f3f3f',
    textAlign: 'center',
    alignSelf: 'flex-end',
    marginLeft: 5,
  },
  residenceToggleView: {
    marginTop: 21,
    width: '100%',
  },
});

export default styles;
