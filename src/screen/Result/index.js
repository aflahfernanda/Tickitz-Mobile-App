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
import {getIdBooking} from '../../store/actions/booking';
import axios from '../../utils/axios';
import Footer from '../../components/Footer';
import styles from './styles';
import {useDispatch} from 'react-redux';
function ResultScreen(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [seat, setSeat] = useState([]);
  const dataDate = date.split('T')[0];
  const dataTime = time.split('.')[0];
  const id = props.route.params.id;
  useEffect(() => {
    getbookingId();
  }, []);
  const getbookingId = async () => {
    try {
      const booking = await dispatch(getIdBooking(id));
      setSeat(booking.action.payload.data.data.seatResult);
      setData(booking.action.payload.data.data[0]);
      setDate(booking.action.payload.data.data[0].dateBooking);
      setTime(booking.action.payload.data.data[0].timeBooking);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cardTicket}>
          <View style={styles.qrCodeContainer}>
            <Image
              source={require('../../assets/QR.png')}
              style={styles.qrCode}
            />
          </View>
          <View style={styles.textFlex}>
            <View style={styles.textFlex1}>
              <Text style={styles.detailTitle}>Movie</Text>
              <Text style={styles.detailInfo}>{data.name}</Text>
            </View>
            <View style={styles.textFlex2}>
              <Text style={styles.detailTitle}>Category</Text>
              <Text style={styles.detailInfo}>{data.category}</Text>
            </View>
          </View>
          <View style={styles.textFlex}>
            <View style={styles.textFlex1}>
              <Text style={styles.detailTitle}>Date</Text>
              <Text style={styles.detailInfo}>{dataDate}</Text>
            </View>
            <View style={styles.textFlex2}>
              <Text style={styles.detailTitle}>Time</Text>
              <Text style={styles.detailInfo}>{dataTime}</Text>
            </View>
          </View>
          <View style={styles.textFlex}>
            <View style={styles.textFlex1}>
              <Text style={styles.detailTitle}>Count</Text>
              <Text style={styles.detailInfo}>{data.totalTicket} pcs</Text>
            </View>
            <View style={styles.textFlex2}>
              <Text style={styles.detailTitle}>Seats</Text>
              <Text style={styles.detailInfo}>
                {seat.map(item => item.seat + ',')}
              </Text>
            </View>
          </View>
          <View style={styles.textFlexs}>
            <View style={styles.textFlex1}>
              <Text style={styles.detailInfos}>Total</Text>
            </View>
            <View style={styles.textFlex2}>
              <Text style={styles.detailInfos}>Rp.{data.totalPayment}</Text>
            </View>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default ResultScreen;
