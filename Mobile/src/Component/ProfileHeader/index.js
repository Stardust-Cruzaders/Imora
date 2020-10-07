import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {useAuth} from '../../contexts/auth';

import styles from './styles';
import textStyles from '../../textStyles';
export default function ProfileHeader() {
  const {FacebookSignOut, user} = useAuth();
  const width = useWindowDimensions().width;
  return (
    <View style={{backgroundColor: '#7e57c2'}}>
      <View style={[styles.topBar, {width: width}]}>
        <BorderlessButton onPress={() => {}}>
          <Icon style={{margin: 15}} name={'edit-3'} size={40} color={'#FFF'} />
        </BorderlessButton>
      </View>
      <View style={styles.profileInfo}>
        <View style={styles.profilePicView}>
          <Image
            source={{
              uri: user.avatar,
              //'https://i.pinimg.com/564x/59/17/c1/5917c11380e44c7e3f10dd3d56e01c4b.jpg',
            }}
            style={styles.profilePic}
          />
        </View>

        <Text style={[textStyles.font, styles.headerTitle]}>{user.name}</Text>
      </View>
    </View>
  );
}
