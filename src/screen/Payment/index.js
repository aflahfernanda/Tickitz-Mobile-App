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
import Seat from '../../components/seat';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
function PaymentScreen(props) {
  const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState(['A1', 'C7']);

  useEffect(() => {
    console.log(props.route.params);
  }, []);

  const handleSelectedSeat = data => {
    if (selectedSeat.includes(data)) {
      const deleteSeat = selectedSeat.filter(el => {
        return el !== data;
      });
      setSelectedSeat(deleteSeat);
    } else {
      setSelectedSeat([...selectedSeat, data]);
    }
  };

  const handleResetSeat = () => {
    setSelectedSeat([]);
  };

  const handleBookingSeat = () => {
    console.log(selectedSeat);
  };

  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <View style={styles.totalPayment}>
          <Text style={styles.payment}>Total Payment</Text>
          <Text style={styles.paymentPrice}>$30.00</Text>
        </View>
        <Text style={styles.paymentMethod}>Payment Method</Text>
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
        </View>
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Pay Your Order</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default PaymentScreen;
