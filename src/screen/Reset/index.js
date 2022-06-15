import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import styles from './styles';

function ResetScreen(props) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleSignin = async () => {
    try {
      console.log(form);
      props.navigation.navigate('AppScreen', {
        screen: 'Home',
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleRegister = () => {
    props.navigation.navigate('AuthScreen', {
      screen: 'Register',
    });
  };
  const handleReset = () => {
    props.navigation.navigate('AuthScreen', {
      screen: 'Reset',
    });
  };
  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
  };
  // const handleLogin = () => {
  //   props.navigation.navigate('AppScreen', {
  //     screen: 'Home',
  //   });
  // };
  // const handleRegister = () => {
  //   props.navigation.navigate('Register');
  // };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/Tickitz.png')}
          style={styles.imageView}
        />
      </View>
      <View>
        <Text style={styles.signIn_Header}>Reset Password</Text>
        <Text style={styles.signIn_Description}>
          we'll send a link to your email shortly
        </Text>
      </View>
      <View>
        <Text style={styles.inputName}>Email</Text>
        <TextInput
          placeholder="Write Your Email"
          style={styles.inputBox}
          onChangeText={text => handleChangeForm(text, 'email')}
        />
      </View>
      <TouchableOpacity onPress={handleSignin} style={styles.buttonLogin}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ResetScreen;
