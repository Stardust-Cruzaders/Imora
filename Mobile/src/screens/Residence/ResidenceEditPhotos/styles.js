import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageComponent: {
    marginHorizontal: 5,
  },
  imageView: {
    flexDirection: 'row',
  },
  deleteImageButton: {
    width: 125,
    height: 125,
    marginVertical: 5,
  },
  oldImagesTitle: {
    fontFamily: 'Roboto',
    fontSize: 25,
    marginVertical: 15,
    marginLeft: 5,
    color: 'black',
  },
  oldImg: {
    width: 125,
    height: 125,
    resizeMode: 'cover',
  },
  addImageButton: {
    marginVertical: 25,
    backgroundColor: '#DDE0E3',

    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'center',
    alignContent: 'center',
    padding: 10,

    borderRadius: 6,

    paddingBottom: 10,
  },
  addImageButtonText: {
    color: '#3F3F3F',
    fontSize: 20,
    fontFamily: 'Roboto',
    marginLeft: 5,
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
