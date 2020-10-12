import React from 'react';
import {View, Text, useWindowDimensions, ScrollView} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';
import textStyles from '../../../textStyles';
import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../Component/Div';
import {useAuth} from '../../../contexts/auth';
import ProfileHeader from '../../../Component/ProfileHeader';
import {useFeed} from '../../../contexts/feed';

export default function ProfileSelf({navigation}) {
  const width = useWindowDimensions().width;

  const {FacebookSignOut, user} = useAuth();
  const {isEmailAvailable, isLocationAvailable, isPhoneAvailable} = useFeed();
  return (
    <View style={styles.container}>
      <ProfileHeader navigation={navigation} />
      <ScrollView>
        <View style={[styles.body, {width: width - 55}]}>
          <View style={styles.main}>
            {user.phone !== null && isPhoneAvailable === true && (
              <>
                <View style={[styles.iconTextView, {marginTop: 25}]}>
                  <Icon
                    name={'phone'}
                    size={24}
                    color={'#3F3F3F'}
                    style={styles.icon}
                  />
                  <Text style={[styles.bodyText, textStyles.font]}>
                    {user.phone}
                  </Text>
                </View>
                <Div threshold={100} />
              </>
            )}

            {user.user_state !== null &&
              isLocationAvailable &&
              user.city !== null && (
                <>
                  <View style={styles.iconTextView}>
                    <Icon
                      name={'map-pin'}
                      size={24}
                      color={'#3F3F3F'}
                      style={styles.icon}
                    />
                    <Text style={[styles.bodyText, textStyles.font]}>
                      {user.user_city}, {user.user_state}
                    </Text>
                  </View>
                  <Div threshold={100} />
                </>
              )}

            {isEmailAvailable && (
              <>
                <View style={styles.iconTextView}>
                  <Icon
                    name={'mail'}
                    size={24}
                    color={'#3F3F3F'}
                    style={styles.icon}
                  />
                  <Text style={[styles.bodyText, textStyles.font]}>
                    {user.email}
                  </Text>
                </View>
                <Div threshold={100} />
              </>
            )}

            <Text style={[styles.bodyTitle, textStyles.font]}>Sobre</Text>
            <Text style={[styles.bodyText, textStyles.font]}>
              {user.bio !== undefined || null
                ? user.bio
                : 'sem descrição disponível'}
            </Text>
            <Div threshold={100} />
            <View>
              <RectButton
                style={styles.button}
                onPress={() => {
                  FacebookSignOut();
                }}>
                <Text style={styles.buttonText}> Sair da Conta </Text>
              </RectButton>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
