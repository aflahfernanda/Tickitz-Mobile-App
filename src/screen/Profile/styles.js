import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
  },
  topButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textTop: {
    fontSize: 20,
    color: 'black',
  },
  click: {
    backgroundColor: '#5F2EEA',
    height: 2,
    borderRadius: 12,
    marginTop: 12,
  },
  cardProfile: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 17,
    marginBottom: 15,
  },
  info: {
    fontSize: 20,
  },
  imageBoxs: {
    backgroundColor: 'gray',
    marginTop: 40,
    marginBottom: 40,
    marginHorizontal: 70,
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  name: {
    textAlign: 'center',
    fontSize: 22,
    color: 'black',
  },
  location: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 12,
  },
  buttonLogout: {
    backgroundColor: '#5F2EEA',
    paddingVertical: 20,
    borderRadius: 12,
    marginTop: 50,
    marginHorizontal: 50,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  textHeader: {
    fontSize: 20,
    color: 'black',
    marginTop: 70,
    marginBottom: 30,
  },
  detailHeader: {
    fontSize: 18,
    marginBottom: 50,
    color: 'gray',
  },
  inputHeader: {
    fontSize: 17,
  },
  inputBox: {
    backgroundColor: 'gainsboro',
    marginTop: 15,
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  buttonUpdate: {
    backgroundColor: '#5F2EEA',
    padding: 16,
    marginTop: 30,
    borderRadius: 10,
    marginBottom: 30,
  },
  updateText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  ticketResultDate: {
    fontSize: 15,
    marginTop: 20,
  },
  ticketResultMovie: {
    fontSize: 22,
    marginTop: 10,
    color: 'black',
  },
  ticketResultButton: {
    backgroundColor: '#00BA88',
    marginTop: 50,
    paddingVertical: 15,
    borderRadius: 12,
  },
  ticketResultButtonUsed: {
    backgroundColor: '#6E7191',
    marginTop: 50,
    paddingVertical: 15,
    borderRadius: 12,
  },
  ticketResultButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
  },
});
