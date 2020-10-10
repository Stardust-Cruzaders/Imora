import React from 'react';
import {View, Text, Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';
export default function UserRow() {
  return (
    <View style={styles.container}>
      <RectButton style={styles.button}>
        <View style={styles.avatarView}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                'https://i.pinimg.com/236x/77/84/0e/77840e05c88ad39b69cf458fe3a2fe50.jpg',
            }}
          />
        </View>
        <View style={styles.infoView}>
          <Text style={styles.name}>Fernanda Batista Cardoso</Text>
          <Text style={styles.description}>
            Engenheira, Cat owner, Sonhadora . Tornar o simples complicado é
            fácil, tornar o complicado simples, isto é criatividade.
          </Text>
        </View>
      </RectButton>
    </View>
  );
}
