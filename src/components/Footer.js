import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Footer(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <View>
        <Image
          source={require('../assets/Tickitz.png')}
          style={{height: 60, width: 150, resizeMode: 'stretch'}}
        />
      </View>
      <Text style={styles.textDesc}>
        Stop waiting in line. Buy tickets conveniently, watch movies quietly.
      </Text>
      <Text style={styles.textHeader}>Explore</Text>
      <View style={styles.textLink}>
        <TouchableOpacity style={styles.textLink1}>
          <Text style={styles.textLinkHome}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textLink1}>
          <Text style={styles.textLinkHome}>List Movie</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textHeader}>Our Sponsor</Text>
      <View style={styles.textLink}>
        <View style={styles.imagePreview}>
          <Image
            source={require('../assets/VectorCinema1.png')}
            style={styles.imageMovie}
          />
        </View>
        <View style={styles.imagePreview}>
          <Image
            source={require('../assets/VectorCinema2.png')}
            style={styles.imageMovie}
          />
        </View>
        <View style={styles.imagePreview}>
          <Image
            source={require('../assets/VectorCinema3.png')}
            style={styles.imageMovie}
          />
        </View>
      </View>
      <Text style={styles.textHeader}>Follow Us</Text>
      <View style={styles.textLink}>
        <View style={styles.imagePreview}>
          <Image
            source={require('../assets/VectorIcon1.png')}
            style={styles.imageMovies}
          />
        </View>
        <View style={styles.imagePreview}>
          <Image
            source={require('../assets/VectorIcon2.png')}
            style={styles.imageMovies}
          />
        </View>
        <View style={styles.imagePreview}>
          <Image
            source={require('../assets/bx_bxl-instagram.png')}
            style={styles.imageMovies}
          />
        </View>
        <View style={styles.imagePreview}>
          <Image
            source={require('../assets/feather_youtube.png')}
            style={styles.imageMovies}
          />
        </View>
      </View>
      <Text>© 2020 Tickitz. All Rights Reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: 'white',
  },
  textDesc: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 30,
  },
  textHeader: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textLink: {
    flexDirection: 'row',
  },
  textLink1: {
    flex: 1,
  },
  imagePreview: {
    flex: 1,
  },
  textLinkHome: {
    fontSize: 15,
    marginBottom: 30,
  },
  imageMovie: {
    width: 80,
    height: 25,
    resizeMode: 'stretch',
    marginBottom: 40,
  },
  imageMovies: {
    width: 30,
    height: 20,
    resizeMode: 'stretch',
    marginBottom: 50,
  },
});
