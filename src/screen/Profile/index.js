import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import axios from '../../utils/axios';
import {useDispatch} from 'react-redux';
import {
  getUserById,
  updatePassword,
  updateProfile,
  updateImage,
} from '../../store/actions/user';
import styles from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function ProfileScreen(props) {
  const dispatch = useDispatch();

  const [user, setUser] = useState([]);
  const [history, setHistory] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isPassword, setIspassword] = useState(false);
  const [image, setImage] = useState(null);
  const [updateImageUser, setUpdateImageUser] = useState({
    image: '',
  });
  const [changeImage, setChangeImage] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    noTelp: '',
  });
  const [password, setPassword] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [refreshing, setRefreshing] = useState(false);
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getdataUser();
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const openCamera = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };
    launchCamera(option, res => {
      if (res.didCancel) {
        console.log('user canceled');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setImage(data);
        setUpdateImageUser(data.fileName);
        handleUpdateImage();
        setChangeImage(true);
      }
    });
  };
  const openLibrary = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };
    launchImageLibrary(option, res => {
      if (res.didCancel) {
        console.log('user canceled');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setImage(data);
        setUpdateImageUser(data.fileName);
        handleUpdateImage();
        setChangeImage(true);
      }
    });
  };
  useEffect(() => {
    getdataUser();
  }, []);
  const getdataUser = async () => {
    try {
      const getId = await AsyncStorage.getItem('id');
      const user = await dispatch(getUserById(getId));
      setUser(user.action.payload.data.data[0]);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
  };
  const handleChangePassword = (passwords, name) => {
    setPassword({...password, [name]: passwords});
  };
  const handleUpdate = async () => {
    const getId = await AsyncStorage.getItem('id');
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }
    await dispatch(updateProfile(getId, form));
    setIsUpdate(true);
    getdataUser();
  };
  const handlePassword = async () => {
    const getId = await AsyncStorage.getItem('id');
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }
    await dispatch(updatePassword('2', password));
    setIspassword(true);
    getdataUser();
  };
  const handleUpdateImage = async () => {
    const formData = new FormData();
    for (const data in updateImageUser) {
      formData.append(data, updateImageUser[data]);
    }
    await dispatch(updateImage('2', formData));
  };
  const historyPage = () => {
    setHistory(false);
  };
  const handleResultTicket = () => {
    props.navigation.navigate('DetailScreen', {
      screen: 'Result',
    });
  };
  const Update = () => {
    setIsUpdate(true);
  };
  const Password = () => {
    setIspassword(true);
  };
  const ImageChange = () => {
    setChangeImage(true);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View>
        {history ? (
          <View style={styles.topButton}>
            <TouchableOpacity onPress={() => setHistory(true)}>
              <Text style={styles.textTop}>Details Account</Text>
              <Text style={styles.click} />
            </TouchableOpacity>
            <TouchableOpacity onPress={historyPage}>
              <Text style={styles.textTop}>Order History</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.topButton}>
            <TouchableOpacity onPress={() => setHistory(true)}>
              <Text style={styles.textTop}>Details Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={historyPage}>
              <Text style={styles.textTop}>Order History</Text>
              <Text style={styles.click} />
            </TouchableOpacity>
          </View>
        )}

        {history ? (
          <View style={styles.container}>
            <View style={styles.cardProfile}>
              <Text style={styles.info}>INFO</Text>

              {image != null ? (
                <Image source={{uri: image.uri}} style={styles.imageBoxs} />
              ) : (
                <Image
                  source={require('../../assets/spiderman.png')}
                  style={styles.imageBoxs}
                />
              )}
              {changeImage ? (
                <View>
                  <TouchableOpacity style={styles.buttonProfile}>
                    <Text
                      style={styles.buttonTextProfile}
                      onPress={() => setChangeImage(false)}>
                      Update Image
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <TouchableOpacity style={styles.buttonProfile}>
                    <Text style={styles.buttonTextProfile} onPress={openCamera}>
                      Open Camera
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.buttonProfile}>
                    <Text
                      style={styles.buttonTextProfile}
                      onPress={openLibrary}>
                      Open Galery
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonProfilecancel}>
                    <Text
                      style={styles.buttonTextProfilecancel}
                      onPress={ImageChange}>
                      Cancel Update
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

              <Text style={styles.name}>
                {user.firstName + ' ' + user.lastName}
              </Text>
              <Text style={styles.location}>{user.email}</Text>
              <TouchableOpacity style={styles.buttonLogout}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.textHeader}>Account Settings</Text>
            <View style={styles.cardProfile}>
              <Text style={styles.detailHeader}>Details Information</Text>
              {isUpdate ? (
                <View>
                  <Text style={styles.inputHeader}>FullName</Text>
                  <Text style={styles.infoName}>
                    {user.firstName + ' ' + user.lastName}
                  </Text>
                  <Text style={styles.inputHeader}>Email</Text>
                  <Text style={styles.infoName}>{user.email}</Text>
                  <Text style={styles.inputHeader}>Phone Number</Text>
                  <Text style={styles.infoName}>{user.noTelp}</Text>
                  <TouchableOpacity
                    style={styles.buttonUpdate}
                    onPress={() => setIsUpdate(false)}>
                    <Text style={styles.updateText}>Update Profile</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <Text style={styles.inputHeader}>First Name</Text>
                  <TextInput
                    placeholder={user.firstName}
                    style={styles.inputBox}
                    onChangeText={text => handleChangeForm(text, 'firstName')}
                  />
                  <Text style={styles.inputHeader}>Last Name</Text>
                  <TextInput
                    placeholder={user.lastName}
                    style={styles.inputBox}
                    onChangeText={text => handleChangeForm(text, 'lastName')}
                  />
                  <Text style={styles.inputHeader}>E-mail</Text>
                  <TextInput
                    placeholder={user.email}
                    style={styles.inputBox}
                    value={user.email}
                  />
                  <Text style={styles.inputHeader}>Phone Number</Text>
                  <TextInput
                    placeholder={user.noTelp}
                    style={styles.inputBox}
                    onChangeText={text => handleChangeForm(text, 'noTelp')}
                  />
                  <TouchableOpacity style={styles.buttonUpdate}>
                    <Text style={styles.updateText} onPress={handleUpdate}>
                      Update Changes
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonCancel}>
                    <Text style={styles.updateText} onPress={Update}>
                      Cancel Update
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            <View style={styles.cardProfile}>
              <Text style={styles.detailHeader}>Account and Privacy</Text>
              {isPassword ? (
                <View>
                  <TouchableOpacity
                    style={styles.buttonUpdate}
                    onPress={() => setIspassword(false)}>
                    <Text style={styles.updateText}>Update Password</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <Text style={styles.inputHeader}>New Password</Text>
                  <TextInput
                    placeholder="Write Your Password"
                    style={styles.inputBox}
                    secureTextEntry={true}
                    onChangeText={passwords =>
                      handleChangePassword(passwords, 'newPassword')
                    }
                  />
                  <Text style={styles.inputHeader}>Confirm</Text>
                  <TextInput
                    placeholder="Write Your Password"
                    style={styles.inputBox}
                    secureTextEntry={true}
                    onChangeText={passwords =>
                      handleChangePassword(passwords, 'confirmPassword')
                    }
                  />
                  <TouchableOpacity
                    style={styles.buttonUpdate}
                    onPress={handlePassword}>
                    <Text style={styles.updateText}>Update Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonCancel}>
                    <Text style={styles.updateText} onPress={Password}>
                      Cancel Update
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.cardProfile}>
              <Image
                source={require('../../assets/VectorCinema2.png')}
                style={styles.ticketResultImage}
              />
              <Text style={styles.ticketResultDate}>
                Tuesday, 07 July 2020 - 04:30pm
              </Text>
              <Text style={styles.ticketResultMovie}>
                Spider-Man: Homecoming
              </Text>
              <TouchableOpacity style={styles.ticketResultButton}>
                <Text
                  style={styles.ticketResultButtonText}
                  onPress={handleResultTicket}>
                  Ticket In Active
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardProfile}>
              <Image
                source={require('../../assets/VectorCinema3.png')}
                style={styles.ticketResultImage}
              />
              <Text style={styles.ticketResultDate}>
                Monday, 14 June 2020 - 02:00pm
              </Text>
              <Text style={styles.ticketResultMovie}>Avengers: End Game</Text>
              <TouchableOpacity style={styles.ticketResultButtonUsed}>
                <Text style={styles.ticketResultButtonText}>Ticket Used</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      <Footer />
    </ScrollView>
  );
}

export default ProfileScreen;
