import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Footer from '../../components/Footer';

import axios from '../../utils/axios';

import styles from './styles';

function HomeScreen(props) {
  const [movie, setMovie] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchRelease, setSearchRelease] = useState(0);
  const [pageInfo, setPageInfo] = useState([]);
  useEffect(() => {
    handleGetMovie();
  }, []);
  useEffect(() => {
    handleSearchMovie();
  }, [searchRelease]);
  const handleGetMovie = async () => {
    try {
      const result = await axios.get(
        'movie?page=1&limit=100&sort=&searchRelease=&searchName=',
      );
      setMovie(result.data.data);
      setPageInfo(result.data.pagination);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const handleSearchMovie = async () => {
    try {
      const result = await axios.get(
        `movie?page=1&limit=100&sort=&searchRelease=${searchRelease}&searchName=`,
      );
      setSearchMovie(result.data.data);
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
  const handleSearchRelease = name => {
    setSearchRelease(name);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textDesc1}>Nearest Cinema,Newest Movie.</Text>
        <Text style={styles.textDesc2}>Find Out Now !</Text>
        <Image
          source={require('../../assets/imageBox.png')}
          style={styles.imageBox}
        />
      </View>
      <View style={styles.backgroundColor}>
        <View style={styles.nowShowingHeader}>
          <Text style={styles.nowShowing}>Now Showing</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>
        <ScrollView style={styles.scroll} horizontal>
          {movie.map(item => (
            <View style={styles.card} key={item.id}>
              <Image
                source={{
                  uri: `https://res.cloudinary.com/da776aoko/image/upload/v1651001489/${item.image}`,
                }}
                style={styles.imageCard}
              />
              <Text style={styles.movieText}>{item.name}</Text>
              <Text style={styles.movieText2}>{item.category}</Text>
              <TouchableOpacity style={styles.buttonViewAll}>
                <Text
                  style={styles.buttonViewAllText}
                  onPress={id => handleDetail(item.id)}>
                  Detail
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <View>
        <View style={styles.containers}>
          <View style={styles.nowShowingHeader}>
            <Text style={styles.nowShowing}>Upcoming</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>
          <ScrollView style={styles.scroll} horizontal>
            <TouchableOpacity
              style={styles.button}
              name="1"
              onPress={name => handleSearchRelease(1)}>
              <Text style={styles.buttonText}>January</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={name => handleSearchRelease(2)}>
              <Text style={styles.buttonText}>February</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={name => handleSearchRelease(3)}>
              <Text style={styles.buttonText}>March</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={name => handleSearchRelease(4)}>
              <Text style={styles.buttonText}>April</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={name => handleSearchRelease(5)}>
              <Text style={styles.buttonText}>May</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={name => handleSearchRelease(6)}>
              <Text style={styles.buttonText}>June</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={name => handleSearchRelease(7)}>
              <Text style={styles.buttonText}>July</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={name => handleSearchRelease(8)}>
              <Text style={styles.buttonText}>August</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={name => handleSearchRelease(9)}>
              <Text style={styles.buttonText}>September</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={name => handleSearchRelease(10)}>
              <Text style={styles.buttonText}>October</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={name => handleSearchRelease(11)}>
              <Text style={styles.buttonText}>November</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={name => handleSearchRelease(12)}>
              <Text style={styles.buttonText}>December</Text>
            </TouchableOpacity>
          </ScrollView>
          <View />
          <ScrollView style={styles.scroll} horizontal>
            {searchMovie.map(item => (
              <View style={styles.cardUpcoming} key={item.id}>
                <Image
                  source={{
                    uri: `https://res.cloudinary.com/da776aoko/image/upload/v1651001489/${item.image}`,
                  }}
                  style={styles.imageCard}
                />
                <Text style={styles.movieText}>{item.name}</Text>
                <Text style={styles.movieText2}>{item.category}</Text>
                <TouchableOpacity
                  style={styles.buttonUpcoming}
                  onPress={id => handleDetail(item.id)}>
                  <Text style={styles.buttonViewAllText}>Detail</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.containers}>
        <View>
          <Text style={styles.inputBox1}>Be the vanguard of the</Text>
          <Text style={styles.inputBox2}>Moviegoers</Text>
        </View>
        <TextInput placeholder="Type your email" style={styles.textInputBox} />
        <TouchableOpacity style={styles.buttonJoinNow}>
          <Text style={styles.buttonJoinText}>Join now</Text>
        </TouchableOpacity>
        <Text style={styles.textJoinNow}>
          By joining you as a Tickitz member, we will always send you the latest
          updates via email .
        </Text>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default HomeScreen;
