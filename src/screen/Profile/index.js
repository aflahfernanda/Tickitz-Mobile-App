import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import axios from '../../utils/axios';

import styles from './styles';

function ProfileScreen(props) {
  const [history, setHistory] = useState(true);
  const historyPage = () => {
    setHistory(false);
  };
  const handleResultTicket = () => {
    props.navigation.navigate('DetailScreen', {
      screen: 'Result',
    });
  };

  return (
    <ScrollView>
      <View>
        {history ? (
          <View style={styles.topButton}>
            <TouchableOpacity onPress={() => setHistory(true)}>
              <Text style={styles.textTop}>Details Account</Text>
              <Text style={styles.click} />
            </TouchableOpacity>
            <TouchableOpacity onPress={historyPage}>
              <Text style={styles.textTop}>Order History</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.topButton}>
            <TouchableOpacity onPress={() => setHistory(true)}>
              <Text style={styles.textTop}>Details Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={historyPage}>
              <Text style={styles.textTop}>Order History</Text>
              <Text style={styles.click} />
            </TouchableOpacity>
          </View>
        )}

        {history ? (
          <View style={styles.container}>
            <View style={styles.cardProfile}>
              <Text style={styles.info}>INFO</Text>

              <Image
                source={require('../../assets/spiderman.png')}
                style={styles.imageBoxs}
              />

              <Text style={styles.name}>Jonas El Rodriguez</Text>
              <Text style={styles.location}>Moviegoers</Text>
              <TouchableOpacity style={styles.buttonLogout}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textHeader}>Account Settings</Text>
            <View style={styles.cardProfile}>
              <Text style={styles.detailHeader}>Details Information</Text>
              <Text style={styles.inputHeader}>Full Name</Text>
              <TextInput
                placeholder="Jonas El Rodriguez"
                style={styles.inputBox}
              />
              <Text style={styles.inputHeader}>E-mail</Text>
              <TextInput
                placeholder="jonasrodrigu123@gmail.com"
                style={styles.inputBox}
              />
              <Text style={styles.inputHeader}>Phone Number</Text>
              <TextInput placeholder="81445687121" style={styles.inputBox} />
            </View>
            <TouchableOpacity style={styles.buttonUpdate}>
              <Text style={styles.updateText}>Update Changes</Text>
            </TouchableOpacity>
            <View style={styles.cardProfile}>
              <Text style={styles.detailHeader}>Account and Privacy</Text>
              <Text style={styles.inputHeader}>New Password</Text>
              <TextInput
                placeholder="Write Your Password"
                style={styles.inputBox}
                secureTextEntry={true}
              />
              <Text style={styles.inputHeader}>Confirm</Text>
              <TextInput
                placeholder="Write Your Password"
                style={styles.inputBox}
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity style={styles.buttonUpdate}>
              <Text style={styles.updateText}>Update Changes</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.cardProfile}>
              <Image
                source={require('../../assets/VectorCinema2.png')}
                style={styles.ticketResultImage}
              />
              <Text style={styles.ticketResultDate}>
                Tuesday, 07 July 2020 - 04:30pm
              </Text>
              <Text style={styles.ticketResultMovie}>
                Spider-Man: Homecoming
              </Text>
              <TouchableOpacity style={styles.ticketResultButton}>
                <Text
                  style={styles.ticketResultButtonText}
                  onPress={handleResultTicket}>
                  Ticket In Active
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardProfile}>
              <Image
                source={require('../../assets/VectorCinema3.png')}
                style={styles.ticketResultImage}
              />
              <Text style={styles.ticketResultDate}>
                Monday, 14 June 2020 - 02:00pm
              </Text>
              <Text style={styles.ticketResultMovie}>Avengers: End Game</Text>
              <TouchableOpacity style={styles.ticketResultButtonUsed}>
                <Text style={styles.ticketResultButtonText}>Ticket Used</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      <Footer />
    </ScrollView>
  );
}

export default ProfileScreen;
