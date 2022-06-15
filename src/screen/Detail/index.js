import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import axios from '../../utils/axios';
import styles from './styles';

function DetailScreen(props) {
  const dataId = props.route.params.id;
  const [movie, setMovie] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [dataOrder, setDataOrder] = useState({
    movieId: dataId,
    dateBooking: new Date().toISOString().split('T')[0],
  });
  useEffect(() => {
    GetMovieId();
  }, []);
  useEffect(() => {
    GetScheduleId();
  }, []);
  const GetMovieId = async () => {
    try {
      const result = await axios.get(`movie/${dataId}`);
      setMovie(result.data.data[0]);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const GetScheduleId = async () => {
    try {
      const result = await axios.get(`schedule/${dataId}`);
      setSchedule(result.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const changeDataBooking = movie => {
    setDataOrder({...dataOrder, ...movie});
  };
  console.log(dataOrder);
  const handleBooking = e => {
    // [1] = localstorage
    // [2] = lempar data dengan state
    props.navigation.navigate('DetailScreen', {
      screen: 'Order',
    });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
          <Image source={require('../../assets/spiderman.png')} />
        </View>
      </View>
      <View style={styles.containers}>
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.category}>{movie.category}</Text>
      </View>
      <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 30}}>
        <View style={{flex: 1}}>
          <Text style={styles.info}>Release date</Text>
          <Text style={styles.infoSchedule}>{movie.releaseDate}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.info}>Directed by</Text>
          <Text style={styles.infoSchedule}>{movie.director}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 30}}>
        <View style={{flex: 1}}>
          <Text style={styles.info}>Duration</Text>
          <Text style={styles.infoSchedule}>{movie.duration}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.info}>Casts</Text>
          <Text style={styles.infoSchedule}>{movie.cast}</Text>
        </View>
      </View>
      <View style={styles.containers}>
        <Text style={styles.infoSchedule}>Synopsis</Text>
        <Text style={styles.synopsis}>{movie.synopsis}</Text>
      </View>
      <View style={styles.showTimes}>
        <Text style={styles.showTimesTickets}>Showtimes and Tickets</Text>
        <TouchableOpacity
          title
          onPress={() => setOpen(true)}
          style={styles.chooseDate}>
          <Text style={styles.textBox}>Choose Date</Text>
        </TouchableOpacity>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <View>
          {schedule.map(item => (
            <View style={styles.timeCard} key={item.id}>
              <Text style={styles.location}>{item.location}</Text>
              <View style={{flexDirection: 'row'}}>
                {item.time.split(',').map(itemTime => (
                  <TouchableOpacity
                    style={styles.timesButton}
                    key={itemTime}
                    onPress={() =>
                      changeDataBooking({
                        timeBooking: itemTime,
                        scheduleId: item.id,
                        premiere: item.premiere,
                      })
                    }>
                    <Text style={styles.timesText}>{itemTime}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.price}>
                <Text style={styles.textPrice}>Price</Text>
                <Text style={styles.textPrices}>{item.price}</Text>
              </View>
              <TouchableOpacity style={styles.buttonBook}>
                <Text style={styles.textBook} onPress={handleBooking}>
                  Book Now
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default DetailScreen;
