import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {postTransaction} from '../../store/actions/transaction';
import AsyncStorage from '@react-native-async-storage/async-storage';
function PaymentScreen(props) {
  const dispatch = useDispatch();
  const id = AsyncStorage.getItem('id');
  const movie = props.route.params.movie;
  const order = props.route.params.order;
  const seat = props.route.params.seat;
  const [form, setForm] = useState({
    userId: '2',
    scheduleId: order.scheduleId,
    dateBooking: order.dateBooking,
    timeBooking: order.timeBooking,
    paymentMethod: 'bca',
    totalPayment: seat.length * order.price,
    statusPayment: 'succes',
    seat: seat,
  });
  console.log(form);
  const handleSubmit = async event => {
    try {
      event.preventDefault();
      // console.log("Submit Login");
      // Input = email password di siapkan
      // console.log(form);
      // Proses = memanggil axios
      const formData = new FormData();
      for (const data in form) {
        formData.append(data, form[data]);
      }
      const resultTransaction = await dispatch(postTransaction(form));
      console.log(resultTransaction);
      console.log(resultTransaction.action.payload.data.data);
      props.navigation.navigate('DetailScreen', {
        screen: 'Midtrans',
        params: {midtrans: resultTransaction.action.payload.data.pagination},
      });
      // Output = suatu keadaan yang dapat diinfokan ke user bahwa proses sudah selesai
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <View style={styles.totalPayment}>
          <Text style={styles.payment}>Total Payment</Text>
          <Text style={styles.paymentPrice}>
            Rp.{order.price * seat.length}
          </Text>
        </View>
        {/* <Text style={styles.paymentMethod}>Payment Method</Text>
        <View style={styles.paymentBoxs}>
          <View style={styles.paymentBox}>
            <View style={styles.paymentInsideBox}>
              <Image
                source={require('../../assets/logos_google-pay.png')}
                style={styles.imageBox}
              />
            </View>
            <View style={styles.paymentInsideBox}>
              <Image
                source={require('../../assets/bca.png')}
                style={styles.imageBox}
              />
            </View>
            <View style={styles.paymentInsideBox}>
              <Image
                source={require('../../assets/gopay.png')}
                style={styles.imageBox}
              />
            </View>
          </View>
          <View style={styles.paymentBox}>
            <View style={styles.paymentInsideBox}>
              <Image
                source={require('../../assets/logos_paypal.png')}
                style={styles.imageBox}
              />
            </View>
            <View style={styles.paymentInsideBox}>
              <Image
                source={require('../../assets/ovo.png')}
                style={styles.imageBox}
              />
            </View>
            <View style={styles.paymentInsideBox}>
              <Image
                source={require('../../assets/dana.png')}
                style={styles.imageBox}
              />
            </View>
          </View>
          <Text style={styles.or}>Or</Text>
          <Text style={styles.pay}>
            Pay via cash. <Text style={styles.pays}>See how it work</Text>
          </Text>
        </View> */}
        <Text style={styles.paymentMethod}>Personal Info</Text>
        <View style={styles.personalBox}>
          <Text style={styles.textInputBox}>Full Name</Text>
          <TextInput
            placeholder="Write Your FullName"
            style={styles.textInput}
          />
          <Text style={styles.textInputBox}>Email</Text>
          <TextInput placeholder="Write Your Email" style={styles.textInput} />
          <Text style={styles.textInputBox}>Phone Number</Text>
          <TextInput
            placeholder="Write Your Phone Number"
            style={styles.textInput}
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
