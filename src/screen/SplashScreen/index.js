import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
function SplashScreen(props) {
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');

    setTimeout(() => {
      if (token) {
        props.navigation.navigate('AppScreen');
      } else {
        props.navigation.navigate('AuthScreen');
      }
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Tickitz.png')}
        style={styles.image}
      />
      <Text style={styles.text}>wait, watch, wow!</Text>
    </View>
  );
}

export default SplashScreen;
