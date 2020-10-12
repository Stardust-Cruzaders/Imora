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
    fontSize: 25,

    alignSelf: 'center',

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
  },

  cardFooter: {
    marginTop: 20,

    flexDirection: 'row',

    justifyContent: 'space-between',
  },

  button: {
    justifyContent: 'center',

    alignItems: 'center',
  },

  dot: {
    color: '#888',

    fontSize: 50,
  },

  activeDot: {
    color: '#26E07C',

    fontSize: 50,
  },
});

export default styles;
