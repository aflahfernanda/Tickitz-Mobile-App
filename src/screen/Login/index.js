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
import axios from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

function LoginScreen(props) {
  const [resultMsg, setResult] = useState('');
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleSignin = async () => {
    try {
      const result = await axios.post('auth/login', form);
      console.log(result.data.data);
      alert(result.data.msg);
      await AsyncStorage.setItem('id', result.data.data.id);
      await AsyncStorage.setItem('token', result.data.data.token);
      await AsyncStorage.setItem('refreshToken', result.data.data.refreshToken);
      setResult(result.data.msg);
      props.navigation.navigate('AppScreen', {
        screen: 'Home',
      });
    } catch (error) {
      setError(error.response.data.msg);
      console.log(error.response.data);
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

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/Tickitz.png')}
          style={styles.imageView}
        />
      </View>
      <View>
        <Text style={styles.signIn_Header}>Sign In</Text>
        <Text style={styles.signIn_Description}>
          Sign in with your data that you entered during your registration
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
      <View>
        <Text style={styles.inputName}>Password</Text>
        <TextInput
          style={styles.inputBox}
          secureTextEntry={true}
          placeholder="Write Your Password"
          onChangeText={text => handleChangeForm(text, 'password')}
        />
      </View>
      {error == false ? (
        <Text>{resultMsg}</Text>
      ) : (
        <Text style={styles.errorMsg}>{error}</Text>
      )}

      <TouchableOpacity onPress={handleSignin} style={styles.buttonLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.signIn_Description}>
        Forgot Your Password?{' '}
        <Text style={styles.buttonSignUp} onPress={handleReset}>
          Reset Now
        </Text>
      </Text>
      <Text style={styles.signIn_Description}>
        Don't have an account?
        <Text style={styles.buttonSignUp} onPress={handleRegister}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

export default LoginScreen;
