import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

import axios from '../../utils/axios';
import Footer from '../../components/Footer';
import styles from './styles';

function ListScreen(props) {
  const [movie, setMovie] = useState([]);
  const [pageInfo, setPageInfo] = useState([]);
  useEffect(() => {
    handleGetMovie();
  }, []);
  const handleGetMovie = async () => {
    try {
      const result = await axios.get(
        'movie?page=1&limit=10&sort=&searchRelease=&searchName=',
      );
      setMovie(result.data.data);
      setPageInfo(result.data.pagination);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const handleDetail = id => {
    props.navigation.navigate('DetailScreen', {
      screen: 'Detail',
      params: {id: id},
    });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.nowShowing}>List Movie</Text>
      </View>
      <View style={styles.flex}>
        <View style={styles.flex1}>
          <Text style={styles.sort}>Sort</Text>
        </View>
        <View style={styles.flex2}>
          <TextInput
            placeholder="search movie name.."
            style={styles.textInputBoxs}
          />
        </View>
      </View>
      <ScrollView style={styles.scroll} horizontal>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>January</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>February</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>March</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>May</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>June</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>July</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>August</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>September</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>October</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>November</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>December</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.row}>
        {movie.map(item => (
          <View style={styles.cardUpcoming} key={item.id}>
            <Image
              source={require('../../assets/spiderman.png')}
              style={styles.imageCard}
            />
            <Text style={styles.movieText}>{item.name}</Text>
            <Text style={styles.movieText2}>{item.category}</Text>
            <TouchableOpacity style={styles.buttonUpcoming}>
              <Text style={styles.buttonViewAllText}>Detail</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <Footer />
    </ScrollView>
  );
}

export default ListScreen;
