import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Image,
  useWindowDimensions,
} from 'react-native';
import {RectButton, BorderlessButton} from 'react-native-gesture-handler';
import styles from './styles';
import textStyles from '../../../textStyles';
import Icon from 'react-native-vector-icons/Feather';

export default function LoginEditInfo() {
  const [name, setName] = useState('Carlos oliveira martins');
  const [phone, setPhone] = useState('(14) 99233-1234');
  const [avatar, setAvatar] = useState(
    'https://i.pinimg.com/564x/c1/a3/76/c1a3762670a1ae7dbb664cda08be04fc.jpg',
  );
  const width = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, textStyles.font]}>
          Cadastre-se para começar!
        </Text>
        <View style={styles.avatarView}>
          <BorderlessButton>
            <Image
              source={{
                uri: avatar,
              }}
              style={styles.avatar}
            />
          </BorderlessButton>
        </View>
      </View>
      <KeyboardAvoidingView behavior={'position'}>
        <View style={[styles.card, {width: width - 55}]}>
          <View style={styles.form}>
            <View style={styles.inputView}>
              <Icon
                name={'user'}
                size={24}
                color={'#7e57c2'}
                style={styles.icon}
              />
              <TextInput
                style={[styles.input, {width: width - 150}]}
                onChangeText={(text) => setName(text)}
                value={name}
                placeholder={'Nome completo'}
                underlineColorAndroid={'#000'}
              />
            </View>
            <View style={styles.inputView}>
              <Icon
                name={'phone'}
                size={24}
                color={'#7e57c2'}
                style={styles.icon}
              />
              <TextInput
                style={[styles.input]}
                onChangeText={(text) => setPhone(text)}
                value={phone}
                placeholder={'Telefone (Opcional)               '}
                underlineColorAndroid={'#000'}
                keyboardType={'phone-pad'}
              />
            </View>
          </View>
          <RectButton style={[styles.button, {width: width - 150}]}>
            <Text style={[styles.buttonText, textStyles.font]}>
              Tudo pronto!
            </Text>
          </RectButton>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
