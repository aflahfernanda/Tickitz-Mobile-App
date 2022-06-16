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

import axios from '../../utils/axios';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './styles';

function ResultScreen(props) {
  const [history, setHistory] = useState(true);
  const historyPage = () => {
    setHistory(false);
  };
  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <View style={styles.cardTicket}>
          <Image
            source={require('../../assets/QR.png')}
            style={styles.qrCode}
          />
          <View style={styles.textFlex}>
            <View style={styles.textFlex1}>
              <Text style={styles.detailTitle}>Movie</Text>
              <Text style={styles.detailInfo}>Spider-Man</Text>
            </View>
            <View style={styles.textFlex2}>
              <Text style={styles.detailTitle}>Category</Text>
              <Text style={styles.detailInfo}>Action</Text>
            </View>
          </View>
          <View style={styles.textFlex}>
            <View style={styles.textFlex1}>
              <Text style={styles.detailTitle}>Date</Text>
              <Text style={styles.detailInfo}>07 Jul</Text>
            </View>
            <View style={styles.textFlex2}>
              <Text style={styles.detailTitle}>Time</Text>
              <Text style={styles.detailInfo}>2:00pm</Text>
            </View>
          </View>
          <View style={styles.textFlex}>
            <View style={styles.textFlex1}>
              <Text style={styles.detailTitle}>Count</Text>
              <Text style={styles.detailInfo}>3 pcs</Text>
            </View>
            <View style={styles.textFlex2}>
              <Text style={styles.detailTitle}>Seats</Text>
              <Text style={styles.detailInfo}>C4, C5, C6</Text>
            </View>
          </View>
          <View style={styles.textFlexs}>
            <View style={styles.textFlex1}>
              <Text style={styles.detailInfos}>Total</Text>
            </View>
            <View style={styles.textFlex2}>
              <Text style={styles.detailInfos}>$30.00</Text>
            </View>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default ResultScreen;
