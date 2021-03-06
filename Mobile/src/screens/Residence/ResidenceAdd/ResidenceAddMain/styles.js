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
    position: 'absolute',
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

    left: 12,
    marginBottom: 20,

    fontFamily: 'Roboto',
  },
  main: {
    marginHorizontal: 10,
  },
  cardText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: '#3F3F3F',
  },
  input: {
    borderColor: 'black',

    borderRadius: 5,
    paddingLeft: 15,
    color: '#3F3F3F',
    marginVertical: 5,

    alignSelf: 'center',
  },
  cardFooter: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginVertical: 25,
    backgroundColor: '#DDE0E3',

    justifyContent: 'center',
    alignItems: 'flex-start',

    alignSelf: 'center',

    padding: 10,

    borderRadius: 6,

    paddingBottom: 10,
  },
  buttonText: {
    color: '#3F3F3F',
    fontSize: 20,
    fontFamily: 'Roboto',
    marginLeft: 5,
  },
  navButton: {
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
  imageComponent: {
    marginHorizontal: 5,
  },
  imageView: {
    flexDirection: 'row',
  },
});

export default styles;
