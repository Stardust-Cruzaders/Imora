import React from 'react';
import {View, Text, Image, useWindowDimensions, ScrollView} from 'react-native';

import {RectButton, BorderlessButton} from 'react-native-gesture-handler';

import styles from './styles';
import textStyles from '../../../textStyles';
import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../Component/Div';
import {useAuth} from '../../../contexts/auth';

export default function ProfileSelf({navigation}) {
  const width = useWindowDimensions().width;

  const {FacebookSignOut} = useAuth();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerView}>
          <View style={[styles.topBar, {width: width}]}>
            <BorderlessButton
              onPress={() => {
                navigation.navigate('ProfileEdit');
              }}>
              <Icon name={'settings'} size={40} color={'#FFF'} />
            </BorderlessButton>
          </View>
          <View style={styles.profileInfo}>
            <View style={styles.profilePicView}>
              <Image
                source={{
                  uri:
                    'https://i.pinimg.com/564x/59/17/c1/5917c11380e44c7e3f10dd3d56e01c4b.jpg',
                }}
                style={styles.profilePic}
              />
            </View>

            <Text style={[textStyles.font, styles.headerTitle]}>
              Will Smith
            </Text>
          </View>
        </View>
        <View style={[styles.body, {width: width - 55}]}>
          <View style={styles.main}>
            <View style={[styles.iconTextView, {marginTop: 25}]}>
              <Icon
                name={'phone'}
                size={24}
                color={'#3F3F3F'}
                style={styles.icon}
              />
              <Text style={[styles.bodyText, textStyles.font]}>
                (11) 12345-4321
              </Text>
            </View>
            <View style={styles.iconTextView}>
              <Icon
                name={'map-pin'}
                size={24}
                color={'#3F3F3F'}
                style={styles.icon}
              />
              <Text style={[styles.bodyText, textStyles.font]}>
                Planeta Terra
              </Text>
            </View>
            <View style={styles.iconTextView}>
              <Icon
                name={'mail'}
                size={24}
                color={'#3F3F3F'}
                style={styles.icon}
              />
              <Text style={[styles.bodyText, textStyles.font]}>
                willSmithOficial@gmail.com
              </Text>
            </View>
            <Div threshold={100} height={1.5} />
            <Text style={[styles.bodyTitle, textStyles.font]}>Sobre</Text>
            <Text style={[styles.bodyText, textStyles.font]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ornare lacus ac consectetur convallis. Vestibulum ultricies nisl
              quis interdum laoreet. Aliquam vitae fermentum lectus. Nunc vel
              varius nisi. Quisque mollis nisl vitae fermentum molestie. Nullam
              eget aliquam lacus. In porta consequat tincidunt. Nulla vehicula
              est vel diam fermentum rutrum.
            </Text>
            <View>
              <Div threshold={100} />
              <RectButton
                style={styles.button}
                onPress={() => {
                  navigation.navigate('Favorites');
                }}>
                <View style={styles.iconTextView}>
                  <Icon
                    name={'heart'}
                    size={24}
                    color={'#3F3F3F'}
                    style={styles.icon}
                  />
                  <Text style={styles.buttonText}> Favoritos </Text>
                </View>
              </RectButton>
              <Div threshold={100} />
              <RectButton
                style={styles.button}
                onPress={() => {
                  navigation.navigate('MyAds');
                }}>
                <View style={styles.iconTextView}>
                  <Icon
                    name={'inbox'}
                    size={24}
                    color={'#3F3F3F'}
                    style={styles.icon}
                  />
                  <Text style={styles.buttonText}> Meus Anúncios </Text>
                </View>
              </RectButton>
              <Div threshold={100} />
              <RectButton
                style={styles.button}
                onPress={() => {
                  navigation.navigate('MyResidences');
                }}>
                <View style={styles.iconTextView}>
                  <Icon
                    name={'home'}
                    size={24}
                    color={'#3F3F3F'}
                    style={styles.icon}
                  />
                  <Text style={styles.buttonText}> Meus imóveis </Text>
                </View>
              </RectButton>
              <Div threshold={100} height={1.5} />
              <RectButton
                style={styles.button}
                onPress={() => {
                  FacebookSignOut();
                }}>
                <View style={styles.iconTextView}>
                  <Icon
                    name={'log-out'}
                    size={24}
                    color={'#E03826'}
                    style={styles.icon}
                  />
                  <Text style={styles.buttonText}> Sair do app </Text>
                </View>
              </RectButton>
              <Div threshold={100} height={1.5} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
