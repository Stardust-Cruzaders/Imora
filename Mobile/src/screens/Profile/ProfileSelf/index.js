import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import styles from './styles';
import textStyles from '../../../textStyles';
import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../Component/Div';

export default function ProfileSelf() {
  const width = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerView}>
          <View style={[styles.topBar, {width: width}]}>
            <TouchableOpacity onPress={() => {}}>
              <Icon name={'settings'} size={40} color={'#FFF'} />
            </TouchableOpacity>
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
              <TouchableOpacity
                style={[styles.button, {width: width - 55}]}
                onPress={() => {}}>
                <View style={styles.iconTextView}>
                  <Icon
                    name={'heart'}
                    size={24}
                    color={'#3F3F3F'}
                    style={styles.icon}
                  />
                  <Text style={styles.buttonText}> Favoritos </Text>
                </View>
              </TouchableOpacity>
              <Div threshold={100} />
              <TouchableOpacity
                style={[styles.button, {width: width - 55}]}
                onPress={() => {}}>
                <View style={styles.iconTextView}>
                  <Icon
                    name={'inbox'}
                    size={24}
                    color={'#3F3F3F'}
                    style={styles.icon}
                  />
                  <Text style={styles.buttonText}> Meus Anúncios </Text>
                </View>
              </TouchableOpacity>
              <Div threshold={100} />
              <TouchableOpacity
                style={[styles.button, {width: width - 55}]}
                onPress={() => {}}>
                <View style={styles.iconTextView}>
                  <Icon
                    name={'home'}
                    size={24}
                    color={'#3F3F3F'}
                    style={styles.icon}
                  />
                  <Text style={styles.buttonText}> Meus imóveis </Text>
                </View>
              </TouchableOpacity>
              <Div threshold={100} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
