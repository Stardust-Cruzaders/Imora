import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#E8E8E8',
  },
  headerView: {
    backgroundColor: '#7e57c2',

    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    alignItems: 'flex-end',
    padding: 5,
  },

  icon: {
    marginRight: 5,
  },
  iconTextView: {
    flexDirection: 'row',
    alignItems: 'center',

    marginVertical: 10,
  },
  body: {
    backgroundColor: '#FFF',
    alignSelf: 'center',
    flex: 1,

    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  main: {
    marginHorizontal: 25,

    marginBottom: 20,
  },
  bodyText: {
    color: '#3F3F3F',

    fontSize: 18,
  },
  bodyTitle: {
    color: '#3F3F3F',
    fontSize: 24,

    marginBottom: 5,
  },
  buttonText: {
    color: '#3F3F3F',
    marginTop: 5,
    marginBottom: 25,
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  button: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
  },
});

export default styles;
