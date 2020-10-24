import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import LoginNavigation from './LoginNavigation';
import MainNavigation from './MainNavigation';
import {useAuth} from '../contexts/auth';
import {ActivityIndicator, View} from 'react-native';
export default function Routes() {
  const {signed, loading, validateToken} = useAuth();

  useEffect(() => {
    validateToken();
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="purple" />
      </View>
    );
  }

  return signed === true ? <MainNavigation /> : <LoginNavigation />;
}
