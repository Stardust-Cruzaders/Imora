/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
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

  const {SignOut, user} = useAuth();
  const {
    is_email_available,
    is_phone_available,
    is_location_available,
    setIsEmailAvailable,
    setIsPhoneAvailable,
    setIsLocationAvailable,
  } = useFeed();

  useEffect(() => {
    function setCurrentData() {
      setIsEmailAvailable(user.is_email_available);
      setIsPhoneAvailable(user.is_phone_available);
      setIsLocationAvailable(user.is_location_available);
    }

    setCurrentData();
  }, []);
  return (
    <View style={styles.container}>
      <ProfileHeader navigation={navigation} />
      <ScrollView>
        <View style={[styles.body, {width: width - 55}]}>
          <View style={styles.main}>
            {!!user.phone && is_phone_available === true && (
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

            {!!user.user_state && is_location_available && !!user.user_city && (
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

            {is_email_available && (
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
                  SignOut();
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
