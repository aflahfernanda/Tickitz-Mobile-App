import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

import styles from './styles';

import Footer from '../../components/Footer';
import {useDispatch, useSelector} from 'react-redux';
import {postTransaction} from '../../store/actions/transaction';
import {getUserById} from '../../store/actions/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {set} from 'react-native-reanimated';
function PaymentScreen(props) {
  const dispatch = useDispatch();

  const [user, setUser] = useState([]);
  const movie = props.route.params.movie;
  const order = props.route.params.order;
  const seat = props.route.params.seat;
  const [form, setForm] = useState({
    userId: '',
    scheduleId: order.scheduleId,
    dateBooking: order.dateBooking,
    timeBooking: order.timeBooking,
    paymentMethod: 'bca_klickpay',
    totalPayment: seat.length * order.price,
    statusPayment: 'succes',
    seat: seat,
  });
  console.log(form);
  useEffect(() => {
    getdataUser();
  }, []);
  const getdataUser = async () => {
    try {
      const getId = await AsyncStorage.getItem('id');
      const user = await dispatch(getUserById(getId));
      console.log(user.action.payload.data.data[0].id);
      setForm({...form, userId: user.action.payload.data.data[0].id});
      setUser(user.action.payload.data.data[0]);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleSubmit = async event => {
    try {
      event.preventDefault();
      const resultTransaction = await dispatch(postTransaction(form));
      console.log(resultTransaction);
      console.log(resultTransaction.action.payload.data.data);
      Alert.alert('Booking Status', 'Succes Booking Seat Next Go To Payment');
      props.navigation.navigate('Midtrans', {
        midtrans: resultTransaction.action.payload.data.pagination,
      });
      // Output = suatu keadaan yang dapat diinfokan ke user bahwa proses sudah selesai
    } catch (error) {
      Alert.alert('Transaction Failed', 'Please Retry Login Account');
      console.log(error.response.data);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.paymentMethod}>Ticket Result</Text>
          <Text style={{marginBottom: 15, fontSize: 15}}>
            Kindly Check Your Ticket Before Pay
          </Text>
          <View style={styles.card}>
            <View style={styles.imageCardsBox}>
              <Image
                source={
                  order.premiere === 'hiflix'
                    ? require('../../assets/VectorCinema3.png')
                    : order.premiere === 'CineOne21'
                    ? require('../../assets/VectorCinema2.png')
                    : require('../../assets/VectorCinema1.png')
                }
                style={styles.imageCards}
              />
            </View>
            <Text style={styles.cardMovie}>{movie.name}</Text>
            <View style={styles.info}>
              <Text style={styles.infoLeft}>{order.dateBooking}</Text>
              <Text style={styles.infoRight}>{order.timeBooking}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoLeft}>One ticket price</Text>
              <Text style={styles.infoRight}>Rp.{order.price}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoLeft}>Seat choosed</Text>
              <Text style={styles.infoRight}>{seat + ''}</Text>
            </View>
            <View style={styles.infoPrice}>
              <Text style={styles.infoLeftPrice}>Total Payment</Text>
              <Text style={styles.infoRightPrice}>
                Rp.{order.price * seat.length}
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.paymentMethod}>Personal Info</Text>
        <View style={styles.personalBox}>
          <Text style={styles.textInputBox}>Full Name</Text>
          <TextInput
            placeholder="Write Your FullName"
            style={styles.textInput}
            value={user.firstName + ' ' + user.lastName}
          />
          <Text style={styles.textInputBox}>Email</Text>
          <TextInput
            placeholder="Write Your Email"
            style={styles.textInput}
            value={user.email}
          />
          <Text style={styles.textInputBox}>Phone Number</Text>
          <TextInput
            placeholder="Write Your Phone Number"
            style={styles.textInput}
            value={user.noTelp}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.textButton}>Pay Your Order</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default PaymentScreen;
