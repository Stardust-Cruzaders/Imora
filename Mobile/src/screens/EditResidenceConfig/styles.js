import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  card: {
    backgroundColor: '#FFF',
    alignSelf: 'center',
    marginHorizontal: 45,
    width: '100%',
  },
  section: {
    margin: 15,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  infoView: {
    flexDirection: 'row',
  },
  title: {
    color: '#3F3F3F',

    fontSize: 20,

    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  status: {
    fontFamily: 'Roboto',
    fontSize: 20,
    textDecorationLine: 'underline',
    marginRight: 90,
  },
  icon: {
    alignSelf: 'center',
  },
  powerIcon: {
    alignSelf: 'center',
    padding: 5,
  },
  description: {
    color: '#8D8D97',

    fontFamily: 'Roboto',
    fontSize: 14,
    textAlign: 'left',
  },
});
export default styles;
