import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',

    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#7E57C2',

    justifyContent: 'center',
    alignItems: 'center',

    padding: 20,
  },
  headerText: {
    fontSize: 25,
    color: '#F9F8FD',

    marginBottom: 15,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  headerDivider: {
    backgroundColor: '#F9F8FD',
    height: 3,

    alignSelf: 'center',
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
    marginTop: 20,
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
});

export default styles;
