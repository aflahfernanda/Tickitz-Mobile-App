import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import axios from '../../utils/axios';

function RegisterScreen(props) {
  const [error, setError] = useState('');
  const [resultMsgm, setResult] = useState('');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    noTelp: '',
    email: '',
    password: '',
  });
  const handleSignUp = async () => {
    try {
      const result = await axios.post('auth/register', form);
      alert(result.data.msg);

      setResult(result.data.msg);
      props.navigation.navigate('AuthScreen', {
        screen: 'Login',
      });
    } catch (error) {
      setError(error.response.data.msg);
      console.log(error.response.data);
    }
  };
  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
  };
  const handleLogin = () => {
    props.navigation.navigate('AuthScreen', {
      screen: 'Login',
    });
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
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={require('../../assets/Tickitz.png')}
          style={styles.imageView}
        />
      </View>
      <View>
        <Text style={styles.signIn_Header}>Sign Up</Text>
        <Text style={styles.signIn_Description}>
          Fill your additional details
        </Text>
      </View>
      <View>
        <Text style={styles.inputName}>First Name</Text>
        <TextInput
          placeholder="Write Your Firs Name"
          style={styles.inputBox}
          onChangeText={text => handleChangeForm(text, 'firstName')}
        />
        <Text style={styles.inputName}>Last Name</Text>
        <TextInput
          placeholder="Write Your Last Name"
          style={styles.inputBox}
          onChangeText={text => handleChangeForm(text, 'lastName')}
        />
        <Text style={styles.inputName}>Phone Number</Text>
        <TextInput
          placeholder="Write Your Phone Number"
          style={styles.inputBox}
          onChangeText={text => handleChangeForm(text, 'noTelp')}
        />
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
      <View style={styles.viewStyle}>
        <Text style={styles.errorMsg}>{error}</Text>
        <TouchableOpacity onPress={handleSignUp} style={styles.buttonLogin}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.buttonSignUp1}>
          Already have account ?
          <Text style={styles.buttonSignUp2} onPress={handleLogin}>
            Sign In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
export default RegisterScreen;
