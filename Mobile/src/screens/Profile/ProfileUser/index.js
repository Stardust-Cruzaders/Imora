import React from 'react';
import {View, Text, Image, useWindowDimensions, ScrollView} from 'react-native';

import {BorderlessButton} from 'react-native-gesture-handler';

import styles from './styles';
import textStyles from '../../../textStyles';
import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../Component/Div';

export default function ProfileUser({navigation, route}) {
  const width = useWindowDimensions().width;
  const {name, bio, avatar, email, phone, is_host, state, city} = route.params;

  console.log(route.params);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerView}>
          <View style={[styles.topBar, {width: width}]}>
            <BorderlessButton onPress={() => {}}>
              <Icon
                style={{margin: 15}}
                name={'message-square'}
                size={45}
                color={'#FFF'}
              />
            </BorderlessButton>
          </View>
          <View style={styles.profileInfo}>
            <View style={styles.profilePicView}>
              <Image
                source={{
                  uri: avatar,
                  //'https://i.pinimg.com/564x/59/17/c1/5917c11380e44c7e3f10dd3d56e01c4b.jpg',
                }}
                style={styles.profilePic}
              />
            </View>

            <Text style={[textStyles.font, styles.headerTitle]}>{name}</Text>
          </View>
        </View>
        <View style={[styles.body, {width: width - 55}]}>
          <View style={styles.main}>
            {(phone !== null || phone !== undefined) && (
              <View style={[styles.iconTextView, {marginTop: 25}]}>
                <Icon
                  name={'phone'}
                  size={24}
                  color={'#3F3F3F'}
                  style={styles.icon}
                />
                <Text style={[styles.bodyText, textStyles.font]}>{phone}</Text>
              </View>
            )}
            {(state !== null || state !== undefined) &&
              (city !== null || city !== undefined) && (
                <View style={styles.iconTextView}>
                  <Icon
                    name={'map-pin'}
                    size={24}
                    color={'#3F3F3F'}
                    style={styles.icon}
                  />
                  <Text style={[styles.bodyText, textStyles.font]}>
                    {city}, {state}
                  </Text>
                </View>
              )}
            <View style={styles.iconTextView}>
              <Icon
                name={'mail'}
                size={24}
                color={'#3F3F3F'}
                style={styles.icon}
              />
              <Text style={[styles.bodyText, textStyles.font]}>{email}</Text>
            </View>
            <Div threshold={100} height={1.5} />
            <Text style={[styles.bodyTitle, textStyles.font]}>Sobre</Text>
            <Text style={[styles.bodyText, textStyles.font]}>
              {bio !== undefined || null ? bio : 'sem descrição disponível'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
