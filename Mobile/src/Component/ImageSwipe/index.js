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
export default function ImageSwipe({img}) {
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

  return (
    <View>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        showHorizontalScrollIndicator={false}
        style={{width, height}}>
        {img.map((image, index) => (
          <Image
            key={index}
            source={{
              uri: 'data:image/jpeg;base64,' + image.data,
            }}
            style={{width, height, resizeMode: 'cover'}}
          />
        ))}
      </ScrollView>
      <FavoriteButton />
      <View style={styles.pagination}>
        {img.map((i, k) => (
          <Text key={k} style={k === active ? styles.activeDot : styles.dot}>
            •
          </Text>
        ))}
      </View>
    </View>
  );
}
