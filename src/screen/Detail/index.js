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
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import DropDownPicker from 'react-native-dropdown-picker';
function DetailScreen(props) {
  const dataId = props.route.params.id;
  const [movie, setMovie] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [image, setImage] = useState('');
  const [date, setDate] = useState(new Date());
  const [dateMovie, setDateMovie] = useState('');
  const [open, setOpen] = useState(false);
  const [limit, setLimit] = useState(2);
  const [pagination, setPagination] = useState('');
  const [openDropdown, setOpenDrodown] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {label: 'All Schedule', value: ''},
    {label: 'apple', value: 'bandung'},
    {label: 'Banana', value: 'jakarta'},
  ]);
  const [dataDate, setDataDate] = useState('');
  const releaseDate = dateMovie.split('T')[0];
  const [dataOrder, setDataOrder] = useState({
    movieId: dataId,
    dateBooking: new Date().toISOString().split('T')[0],
  });
  useEffect(() => {
    GetMovieId();
  }, []);
  useEffect(() => {
    GetScheduleId();
  }, [dataDate, value, limit, pagination]);
  const GetMovieId = async () => {
    try {
      const result = await axios.get(`movie/${dataId}`);
      setMovie(result.data.data[0]);
      setImage(result.data.data[0].image);
      setDateMovie(result.data.data[0].releaseDate);
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(schedule);
  const GetScheduleId = async () => {
    try {
      const result = await axios.get(
        `schedule?page=1&limit=${limit}&searchLocation=${value}&searchMovieId=${dataId}&searchDate=${dataDate}`,
      );
      setSchedule(result.data.data);
      setPagination(result.data.pagination.totalPage);
    } catch (error) {
      console.log(error.response);
    }
  };
  const changeDataBooking = movie => {
    setDataOrder({...dataOrder, ...movie});
  };
  const handleBooking = e => {
    props.navigation.navigate('Order', {dataOrder: dataOrder, movie: movie});
  };
  const handleValue = () => {
    console.log(items);
  };
  const handleViewAll = () => {
    setDataDate('');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
          <Image
            source={{
              uri: `https://res.cloudinary.com/da776aoko/image/upload/v1651001489/${image}`,
            }}
            style={styles.imageCard}
          />
        </View>
      </View>
      <View style={styles.containers}>
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.category}>{movie.category}</Text>
      </View>
      <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 30}}>
        <View style={{flex: 1}}>
          <Text style={styles.info}>Release date</Text>
          <Text style={styles.infoSchedule}>{releaseDate}</Text>
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
        <View style={styles.inputSort}>
          <DropDownPicker
            open={openDropdown}
            // value={value}
            items={schedule.map(item => ({
              key: item.id,
              label: item.location,
              value: item.location,
            }))}
            setOpen={setOpenDrodown}
            setValue={setValue}
            setItems={setItems}
            style={styles.sort}
            onChangeValue={handleValue}
          />
          <TouchableOpacity
            title
            onPress={() => setOpen(true)}
            style={styles.chooseDate}>
            <Text style={styles.textBox}>
              {dataDate.length == 0 ? 'Choose Date' : dataDate}
            </Text>
          </TouchableOpacity>
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              setDataDate(date.toISOString().split('T')[0]);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <TouchableOpacity style={styles.viewAll} onPress={handleViewAll}>
            <Text style={styles.textViewAll}>View All Date</Text>
          </TouchableOpacity>
        </View>
        <View>
          {schedule.map(item => (
            <View style={styles.timeCard} key={item.id}>
              <View style={styles.imageBoxCard}>
                <Image
                  source={
                    item.premiere === 'hiflix'
                      ? require('../../assets/VectorCinema3.png')
                      : item.premiere === 'CineOne21'
                      ? require('../../assets/VectorCinema2.png')
                      : require('../../assets/VectorCinema1.png')
                  }
                  style={styles.imageCards}
                />
              </View>
              <Text style={styles.location}>{item.location}</Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {item.time.split(',').map(itemTime => (
                  <TouchableOpacity
                    style={styles.timesButton}
                    key={itemTime}
                    onPress={() =>
                      changeDataBooking({
                        timeBooking: itemTime,
                        scheduleId: item.id,
                        premiere: item.premiere,
                        price: item.price,
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
          {pagination == 1 ? (
            <Text style={styles.paginationInfo}>
              -----All Schedule Has Been Show-----
            </Text>
          ) : (
            <TouchableOpacity onPress={() => setLimit(limit + 2)}>
              <Text style={styles.paginationInfo}>------View More------</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default DetailScreen;
