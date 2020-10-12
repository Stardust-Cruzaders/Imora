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
  input: {
    borderColor: 'black',

    borderRadius: 5,
    paddingLeft: 15,
    color: '#3F3F3F',
    marginVertical: 5,
  },
  itemView: {
    flexDirection: 'row',

    justifyContent: 'flex-start',
    marginTop: 15,
    marginBottom: 5,
  },
  itemTitle: {
    color: '#3F3F3F',

    fontSize: 25,

    fontFamily: 'Roboto',
    alignSelf: 'center',
  },
  toggleButton: {
    width: '15%',
  },
  toggleIcon: {
    alignSelf: 'center',
  },
  title: {
    color: '#3F3F3F',

    fontSize: 20,

    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  icon: {
    alignSelf: 'center',
  },
  description: {
    color: '#8D8D97',

    fontFamily: 'Roboto',
    fontSize: 14,
    textAlign: 'left',
  },
  saveView: {
    position: 'absolute',
    bottom: 1,
    right: 1,
  },
  saveButton: {
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#3F3F3F',

    borderRadius: 100,
    padding: 15,
    margin: 15,
  },
  saveIcon: {
    color: '#FFF',
    alignSelf: 'center',
  },
});
export default styles;
