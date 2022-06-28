import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  Alert,
} from 'react-native';
import Footer from '../../components/Footer';
import {useDispatch} from 'react-redux';
import {
  getUserById,
  updatePassword,
  updateProfile,
  updateImage,
  getBookingByUserById,
  deleteImage,
} from '../../store/actions/user';
import styles from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function ProfileScreen(props) {
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const [bookings, setBooking] = useState([]);
  const [history, setHistory] = useState(true);
  const [isUpdate, setIsUpdate] = useState(true);
  const [isPassword, setIspassword] = useState(true);
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState(null);
  const [updateImageUser, setUpdateImageUser] = useState({
    image: '',
  });
  console.log(updateImageUser);
  console.log(updateImageUser);
  const [changeImage, setChangeImage] = useState(true);
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
  useEffect(() => {
    getbookingUser();
  }, []);
  const getbookingUser = async () => {
    try {
      const getId = await AsyncStorage.getItem('id');
      const booking = await dispatch(getBookingByUserById(getId));
      setBooking(booking.action.payload.data.data);
      setDate();
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(bookings);
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
    Alert.alert('Update Succes', 'Succes Update Profile');
    setIsUpdate(true);
    getdataUser();
  };
  const handlePassword = async () => {
    const getId = await AsyncStorage.getItem('id');
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }
    await dispatch(updatePassword(getId, password));
    Alert.alert('Update Succes', 'Succes Update Password');
    setIspassword(true);
    getdataUser();
  };
  const handleUpdateImage = async () => {
    try {
      const getId = await AsyncStorage.getItem('id');
      const formData = new FormData();
      for (const data in updateImageUser) {
        formData.append(data, updateImageUser[data]);
      }
      await dispatch(updateImage(getId, formData));
      Alert.alert('Update Succes', 'Succes Update Image');
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleLogout = async () => {
    try {
      alert('Logout');
      await AsyncStorage.clear();
      props.navigation.navigate('AuthScreen', {
        screen: 'Login',
      });
    } catch (error) {}
  };
  const handleDelete = async () => {
    try {
      const getId = await AsyncStorage.getItem('id');
      await dispatch(deleteImage('4ec9d0a7-2004-4483-9037-4fa8760a395c'));
      Alert.alert('Delete Succes', 'Succes Delete Image');
      setChangeImage(true);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const historyPage = () => {
    setHistory(false);
  };
  const handleResultTicket = id => {
    props.navigation.navigate('Result', {id: id});
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
  console.log(bookings);
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
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
      </View>
      <View>
        {history ? (
          <View style={styles.container}>
            <View style={styles.cardProfile}>
              <Text style={styles.info}>INFO</Text>

              {image != null ? (
                <Image source={{uri: image.uri}} style={styles.imageBoxs} />
              ) : (
                <Image
                  source={{
                    uri: `https://res.cloudinary.com/da776aoko/image/upload/v1651001489/${user.image}`,
                  }}
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
                  <TouchableOpacity style={styles.buttonProfile}>
                    <Text
                      style={styles.buttonTextProfile}
                      onPress={handleDelete}>
                      Delete Image
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
              <TouchableOpacity
                style={styles.buttonLogout}
                onPress={handleLogout}>
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
            {bookings.map(item => (
              <View style={styles.cardProfile} key={item.id}>
                <Image
                  source={
                    item.premiere === 'hiflix'
                      ? require('../../assets/VectorCinema3.png')
                      : item.premiere === 'CineOne21'
                      ? require('../../assets/VectorCinema2.png')
                      : require('../../assets/VectorCinema1.png')
                  }
                  style={styles.ticketResultImage}
                />
                <Text style={styles.ticketResultDate}>
                  {item.dateBooking.split('T')[0]}-{' '}
                  {item.timeBooking.split('.')[0]}
                </Text>
                <Text style={styles.ticketResultMovie}>{item.name}</Text>
                <TouchableOpacity style={styles.ticketResultButton}>
                  <Text
                    style={styles.ticketResultButtonText}
                    onPress={id => handleResultTicket(item.id)}>
                    > Ticket In Active
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>
      <Footer />
    </ScrollView>
  );
}

export default ProfileScreen;
