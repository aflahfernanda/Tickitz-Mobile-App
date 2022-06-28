import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Header(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  const handleHome = () => {
    props.navigation.navigate('Home');
  };
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity onPress={handleHome}>
          <Image
            source={require('../assets/Tickitz.png')}
            style={{height: 35, width: 80, resizeMode: 'stretch'}}
            onPress={handleHome}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={openDrawer}>
        <Icon name="menu" size={25} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
  },
});
