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
    justifyContent: 'center',

    marginHorizontal: 50,
    marginTop: 50,
  },
  title: {
    color: '#F0F0F0',
    fontSize: 36,
    textAlign: 'center',
  },
  avatar: {
    resizeMode: 'cover',
    width: 100,
    height: 100,

    borderRadius: 100,
  },
  avatarView: {
    borderRadius: 100,
    marginVertical: 25,
  },
  card: {
    backgroundColor: '#FFF',

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 5,

    paddingVertical: 50,
  },
  inputView: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginVertical: 10,
    fontSize: 18,

    paddingLeft: 30,
    paddingVertical: 15,
    textAlign: 'left',

    color: '#8D8D97',
  },
  inputLocation: {
    marginVertical: 10,
    fontSize: 18,

    paddingLeft: 30,
    paddingVertical: 15,
    textAlign: 'left',

    color: '#8D8D97',
  },
  icon: {
    position: 'absolute',
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
