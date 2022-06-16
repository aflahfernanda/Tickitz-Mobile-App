import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Header(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <View>
        <Image
          source={require('../assets/Tickitz.png')}
          style={{height: 35, width: 80, resizeMode: 'stretch'}}
        />
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
