import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
  },
  totalPayment: {
    backgroundColor: 'white',
    marginTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  imageBox: {
    width: 60,
    resizeMode: 'stretch',
    height: 25,
  },
  payment: {
    fontSize: 15,
  },
  paymentPrice: {
    fontSize: 15,
    color: 'black',
  },
  paymentMethod: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
  },
  paymentBoxs: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 50,
  },
  paymentBox: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  paymentInsideBox: {
    backgroundColor: 'gainsboro',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    flex: 1,
    marginRight: 10,
  },
  or: {
    textAlign: 'center',
  },
  pay: {
    textAlign: 'center',
  },
  pays: {
    color: '#5F2EEA',
  },
  personalBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
  },
  textInputBox: {
    fontSize: 17,
  },
  textInput: {
    backgroundColor: 'gainsboro',
    paddingHorizontal: 20,
    marginTop: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#5F2EEA',
    paddingVertical: 15,
    marginTop: 40,
    borderRadius: 12,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
  card: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 12,
    justifyContent: 'center',
    marginBottom: 30,
  },
  imageCardsBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardPremiere: {
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
    marginTop: 20,
  },
  cardMovie: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 20,
  },
  info: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoLeft: {
    fontSize: 15,
  },
  infoRight: {
    fontSize: 15,
    color: 'black',
  },
  infoPrice: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoLeftPrice: {
    fontSize: 18,
    color: 'black',
  },
  infoRightPrice: {
    fontSize: 25,
    color: '#5F2EEA',
  },
});
