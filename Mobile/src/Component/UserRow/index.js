import React from 'react';
import {View, Text, Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';
export default function UserRow({navigation, user}) {
  return (
    <View style={styles.container}>
      <RectButton
        onPress={() => {
          /*
          navigation.navigate('ProfileUser', {
            user: user.item,
          });
          */
          console.log(user);
        }}
        style={styles.button}>
        <View style={styles.avatarView}>
          <Image
            style={styles.avatar}
            source={{
              uri: user.avatar,
              //'https://i.pinimg.com/236x/77/84/0e/77840e05c88ad39b69cf458fe3a2fe50.jpg',
            }}
          />
        </View>
        <View style={styles.infoView}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.description}>{user.bio}</Text>
        </View>
      </RectButton>
    </View>
  );
}
