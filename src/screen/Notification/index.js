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
import Notification from '../../utils/notif';

function NotificationScreen(props) {
  const handleClickReminder = () => {
    console.log('clicked');
    // Notification.reminderProductNotification();
    const setNotification = {
      title: 'Product',
      message: 'You Can Buy This Product',
      date: new Date(Date.now() + 2 * 1000),
    };
    console.log(setNotification);
    Notification.scheduleProductNotification(setNotification);
  };
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
      <Button title="Reminder Product !" onPress={handleClickReminder} />
    </View>
  );
}

export default NotificationScreen;
