/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
export default function ImageSwipe({img}) {
  const width = useWindowDimensions().width;
  const height = width * 0.6;

  const [active, setActive] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }
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
            source={{uri: image}}
            style={{width, height, resizeMode: 'cover'}}
          />
        ))}
      </ScrollView>
      <View style={styles.favoriteButtonView}>
        <RectButton
          style={styles.favoriteButton}
          onPress={() => {
            toggleFavorite();
          }}>
          {isFavorite == true 
            ? (<Ionicon name={'ios-heart'} size={50} color={'#CB2F2F'} />)
            : (<Ionicon name={'ios-heart-outline'} size={50} color={'#CB2F2F'} />)
          }
        </RectButton>
      </View>
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
