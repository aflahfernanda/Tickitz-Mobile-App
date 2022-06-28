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
function ForgotScreen(props) {
  const [form, setForm] = useState({
    keyChangePassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const handleSignin = async () => {
    try {
      console.log(form);
      const result = await axios.patch('auth/resetPassword', form);
      alert(result.data.msg);
      props.navigation.navigate('AuthScreen', {
        screen: 'Login',
      });
    } catch (error) {
      console.log(error);
    }
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
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={require('../../assets/Tickitz.png')}
          style={styles.imageView}
        />
      </View>
      <View>
        <Text style={styles.signIn_Header}>Forgot Password</Text>
        <Text style={styles.signIn_Description}>
          we'll send a link to your email shortly
        </Text>
      </View>
      <View>
        <Text style={styles.inputName}>OTP Key</Text>
        <TextInput
          placeholder="Write Your OTP Key"
          style={styles.inputBox}
          onChangeText={text => handleChangeForm(text, 'keyChangePassword')}
        />
        <Text style={styles.inputName}>New Password</Text>
        <TextInput
          placeholder="Write Your New Password"
          style={styles.inputBox}
          secureTextEntry={true}
          onChangeText={text => handleChangeForm(text, 'newPassword')}
        />
        <Text style={styles.inputName}>Confirm Password</Text>
        <TextInput
          placeholder="Write Your Confirm Password"
          style={styles.inputBox}
          secureTextEntry={true}
          onChangeText={text => handleChangeForm(text, 'confirmPassword')}
        />
      </View>
      <TouchableOpacity onPress={handleSignin} style={styles.buttonLogin}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default ForgotScreen;
