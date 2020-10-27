import React from 'react';
import {View, Text, Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';
export default function UserRowEditAvatar({user}) {
  return (
    <View style={styles.container}>
      <RectButton onPress={() => {}} style={styles.button}>
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
          <Text style={styles.description}>
            Clique aqui para alterar sua foto.
          </Text>
        </View>
      </RectButton>
    </View>
  );
}
