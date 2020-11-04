import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',

    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFF',

    justifyContent: 'center',

    borderRadius: 10,
    padding: 20,
  },
  cardTitle: {
    fontSize: 23,
    alignSelf: 'center',
    fontFamily: 'Roboto',
    color: '#3F3F3F',
  },

  cardText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: '#3F3F3F',
  },

  description: {
    color: '#8D8D97',
    fontSize: 16,
    fontFamily: 'Roboto',
    left: 12,
    marginBottom: 20,
  },
  checklist: {
    marginHorizontal: 10,
    marginRight: 25,
  },
  preferenceView: {
    marginTop: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 10,
  },
  input: {
    borderRadius: 5,
    paddingLeft: 15,

    marginVertical: 5,
    color: '#3F3F3F',
    alignSelf: 'center',

    textAlignVertical: 'top',
  },
  dot: {
    color: '#888',
    fontSize: 50,
  },
  activeDot: {
    color: '#26E07C',
    fontSize: 50,
  },
  spaceType: {},
  residenceType: {
    marginTop: 15,
  },
});

export default styles;
