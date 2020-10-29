import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  dot: {
    color: '#888',
    fontSize: 50,
    margin: 3,
  },
  activeDot: {
    color: '#FFF',
    fontSize: 50,
    margin: 3,
  },
});
export default styles;
