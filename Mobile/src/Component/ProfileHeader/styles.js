import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: '#7e57c2',

    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    alignItems: 'flex-end',
  },
  profileInfo: {
    justifyContent: 'center',
    alignContent: 'center',

    marginBottom: 8,
  },
  profilePic: {
    resizeMode: 'cover',
    width: '100%',
    height: 150,

    alignSelf: 'center',

    borderRadius: 1000,

    flex: 1,
  },
  profilePicView: {
    width: 150,
    height: 150,

    borderRadius: 1000,
    borderColor: '#FFF',
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 15,
    alignSelf: 'center',
    backgroundColor: '#FFF',
  },
  headerTitle: {
    color: '#FFF',

    fontSize: 25,

    alignSelf: 'center',
  },
  icon: {
    marginRight: 5,
  },
  iconTextView: {
    flexDirection: 'row',
    alignItems: 'center',

    marginVertical: 10,
  },
});
export default styles;
