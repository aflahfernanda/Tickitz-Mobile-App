import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  Alert,
  Button,
} from 'react-native';
import Seat from '../../components/seat';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Footer from '../../components/Footer';
import {useDispatch} from 'react-redux';
import {getSeatBooking} from '../../store/actions/booking';
import axios from '../../utils/axios';
function OrderScreen(props) {
  const dispatch = useDispatch();
  const orderSeat = props.route.params.dataOrder;
  const movie = props.route.params.movie;
  const [seatBook, setSeatBook] = useState([]);
  const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const [selectedSeat, setSelectedSeat] = useState([]);

  useEffect(() => {
    getseatBooking();
  }, []);
  const [reservedSeat, setReservedSeat] = useState([]);
  console.log(reservedSeat);
  const getseatBooking = async () => {
    try {
      // const result = await axios.get(
      //   'booking?scheduleId=12&dateBooking=&timeBooking=09:00',
      // );
      // console.log(result.data.data);
      const user = await dispatch(
        getSeatBooking(orderSeat.scheduleId, orderSeat.timeBooking),
      );
      setSeatBook(user.action.payload.data.data);
      setReservedSeat(user.action.payload.data.data.map(item => item.seat));
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(seatBook);
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
    props.navigation.navigate('Payment', {
      order: orderSeat,
      movie: movie,
      seat: selectedSeat,
    });
  };
  return (
    <ScrollView>
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
            <View style={styles.imageCardsBox}>
              <Image
                source={
                  orderSeat.premiere === 'hiflix'
                    ? require('../../assets/VectorCinema3.png')
                    : orderSeat.premiere === 'CineOne21'
                    ? require('../../assets/VectorCinema2.png')
                    : require('../../assets/VectorCinema1.png')
                }
                style={styles.imageCards}
              />
            </View>
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
