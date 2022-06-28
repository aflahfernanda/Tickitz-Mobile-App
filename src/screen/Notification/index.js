import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import axios from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

function NotificationScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
    </View>
  );
}

export default NotificationScreen;
