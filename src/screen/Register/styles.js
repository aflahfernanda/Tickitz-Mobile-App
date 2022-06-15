import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 20,
  },
  imageView: {
    width: 100,
    height: 40,
    resizeMode: 'stretch',
  },
  signIn_Header: {
    marginTop: 35,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  signIn_Description: {
    marginTop: 15,
    fontSize: 15,
  },
  inputName: {
    marginTop: 20,
    fontSize: 20,
  },
  inputBox: {
    backgroundColor: 'gainsboro',
    marginTop: 15,
    marginRight: 20,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  buttonLogin: {
    marginTop: 50,
    backgroundColor: '#5F2EEA',
    paddingVertical: 10,
    marginRight: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonSignUp1: {
    marginBottom: 100,
    marginTop: 20,
    textAlign: 'center',
    fontSize: 15,
  },
  buttonSignUp2: {
    color: '#5F2EEA',
    marginBottom: 100,
    marginTop: 20,
  },
  viewStyle: {
    marginBottom: 80,
  },
  errorMsg: {
    color: 'red',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 20,
  },
});
