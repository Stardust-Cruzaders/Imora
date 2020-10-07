import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7E57C2',

    alignItems: 'center',
  },
  header: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',

    marginHorizontal: 50,
    marginTop: 50,

    marginBottom: 50,
  },
  title: {
    color: '#F0F0F0',
    fontSize: 36,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFF',

    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,

    paddingVertical: 25,
  },
  description: {
    color: '#3F3F3F',

    fontSize: 25,

    marginHorizontal: 20,
    textAlign: 'center',

    marginBottom: 10,
  },
  button: {
    backgroundColor: '#26E07C',

    marginTop: 25,

    justifyContent: 'center',
    alignItems: 'center',

    paddingVertical: 10,

    borderRadius: 4,
  },
  buttonText: {
    fontSize: 24,
    color: '#FFF',
  },
});

export default styles;
