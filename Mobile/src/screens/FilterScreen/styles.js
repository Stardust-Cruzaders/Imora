import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDE0E3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitleStyle: {
    fontFamily: 'Roboto',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#3f3f3f',
    marginVertical: 20,
  },
  filterBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: width - 50,
    flex: 1,
  },
  marginBox: {
    margin: 18,
  },
  textInputStyle: {
    // Style do Input
    borderColor: '#8D8D97',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    backgroundColor: '#F0F0F0',

    // Style do Text
    fontFamily: 'Roboto',
    fontSize: 20,
  },
  divider: {
    backgroundColor: '#000',
    height: 1.2,
  },
  subTitleStyle: {
    fontFamily: 'Roboto',
    fontSize: 25,
    marginTop: 8,
    marginVertical: 5,
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontSize: 18,
  },
  subText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    marginTop: 8,
    marginLeft: 8,
    marginVertical: 5,
    color: 'gray',
  },
  radioButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionView: {
    marginVertical: 15,
    marginRight: 5,
  },
  filterButtonView: {
    paddingVertical: 5,
    backgroundColor: 'transparent',
    width,
  },
  filterButton: {
    backgroundColor: '#26E07C',

    position: 'absolute',
    bottom: 1,
    right: 1,
    margin: 15,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 100,

    width: 65,
    height: 65,
  },
});

export default styles;
