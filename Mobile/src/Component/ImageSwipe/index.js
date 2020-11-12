/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

import styles from './styles';
import FavoriteButton from '../FavoriteButton';
import {nanoid} from 'nanoid';
export default function ImageSwipe({img, isRawImage = false, widthDiff, residence_id, user_id}) {
  const width = useWindowDimensions().width;
  const height = width * 0.6;

  const [active, setActive] = useState(0);

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  var imgStyle = {width: width - widthDiff, marginRight: 50, height, resizeMode: 'cover'};
  if (widthDiff === 0){
    imgStyle = {width, height, resizeMode: 'cover'};
  }
  else {
    imgStyle = {width: width - widthDiff, marginRight: 50, height, resizeMode: 'cover'};
  }
  return (
    <View>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        showsHorizontalScrollIndicator={false}
        style={{width, height}}>
        {img.map((image, index) => (
          <Image
            key={index}
            source={ isRawImage ? {

              uri: 'data:image/jpeg;base64,' + image.data,
            } : {uri: image}}
            style={imgStyle}
          />
        ))}

      </ScrollView>
      <View style={styles.pagination}>
        {img.map((i, k) => (
          <Text key={nanoid(9)} style={k == (active - 0) ? styles.activeDot : styles.dot}>•</Text>
        ))}
      </View>
      <FavoriteButton user_id={user_id} residence_id={residence_id}/>

    </View>
  );
}
