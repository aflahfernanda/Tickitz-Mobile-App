import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import Seat from '../../components/seat';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
function OrderScreen(props) {
  const orderSeat = props.route.params.dataOrder;
  const movie = props.route.params.movie;
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
    props.navigation.navigate('DetailScreen', {
      screen: 'Payment',
      params: {order: orderSeat, movie: movie, seat: selectedSeat},
    });
  };
  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <Text style={styles.textHeader}>Choose Your Seat</Text>
        <View style={styles.containerSeat}>
          <Text style={styles.line} />
          <FlatList
            data={listSeat}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Seat
                seatAlphabhet={item}
                reserved={reservedSeat}
                selected={selectedSeat}
                selectSeat={handleSelectedSeat}
              />
            )}
          />
          <Text style={styles.textSeat}>Seating key</Text>
          <View style={styles.seatingFlex}>
            <View style={styles.seatingFlex1}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="arrow-down" size={30} style={styles.arrowBox} />
                <Text>A-G</Text>
              </View>
            </View>
            <View style={styles.seatingFlex2}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="arrow-right" size={30} style={styles.arrowBox} />
                <Text>1-14</Text>
              </View>
            </View>
          </View>
          <View style={styles.seatingFlex}>
            <View style={styles.seatingFlex1}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.soldBox} />
                <Text>Available</Text>
              </View>
            </View>
            <View style={styles.seatingFlex2}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.selectedBox} />
                <Text>Selected</Text>
              </View>
            </View>
          </View>
          <View style={styles.seatingFlex}>
            <View style={styles.seatingFlex1}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.soldsBox} />
                <Text>Sold</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonCheckout}>
          <Text style={styles.buttonText} onPress={handleResetSeat}>
            Reset
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.orderHeader}>Order Info</Text>
          <View style={styles.card}>
            <Image
              source={require('../../assets/VectorCinema2.png')}
              style={styles.imageBox}
            />
            <Text style={styles.cardPremiere}>{orderSeat.premiere}</Text>
            <Text style={styles.cardMovie}>{movie.name}</Text>
            <View style={styles.info}>
              <Text style={styles.infoLeft}>{orderSeat.dateBooking}</Text>
              <Text style={styles.infoRight}>{orderSeat.timeBooking}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoLeft}>One ticket price</Text>
              <Text style={styles.infoRight}>Rp.{orderSeat.price}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoLeft}>Seat choosed</Text>
              <Text style={styles.infoRight}>{selectedSeat + ''}</Text>
            </View>
            <View style={styles.infoPrice}>
              <Text style={styles.infoLeftPrice}>Total Payment</Text>
              <Text style={styles.infoRightPrice}>
                Rp.{orderSeat.price * selectedSeat.length}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonCheckout}>
          <Text style={styles.buttonText} onPress={handleBookingSeat}>
            CheckOut Now
          </Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default OrderScreen;
