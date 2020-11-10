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
    alignSelf: 'flex-start',
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
  saveButton: {
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
