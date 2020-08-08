import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    top: 195,
    alignSelf: 'center',
  },
  dot: {
    color: '#888',
    fontSize: 50,
  },
  activeDot: {
    color: '#FFF',
    fontSize: 50,
  },
  favoriteButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,

    position: 'absolute',
    right: 1,
  },
  favoriteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    padding: 5,
    alignSelf: 'center',
  },
});
export default styles;
