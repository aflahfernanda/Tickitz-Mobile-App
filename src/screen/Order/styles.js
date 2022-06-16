import {StyleSheet} from 'react-native';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  containerSeat: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  textHeader: {
    fontSize: 20,
    marginBottom: 30,
    marginTop: 40,
    color: 'black',
  },
  line: {
    backgroundColor: '#5F2EEA',
    height: 8,
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 12,
  },
  textSeat: {
    fontSize: 18,
    marginTop: 15,
    color: 'black',
    marginHorizontal: 10,
  },
  seatingFlex: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 20,
  },
  seatingFlex1: {
    flex: 1,
  },
  seatingFlex2: {
    flex: 1,
  },
  arrowBox: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginRight: 10,
  },
  soldBox: {
    backgroundColor: '#D6D8E7',
    width: 30,
    height: 30,
    borderRadius: 5,
    marginRight: 10,
  },
  soldsBox: {
    backgroundColor: '#6E7191',
    width: 30,
    height: 30,
    borderRadius: 5,
    marginRight: 10,
  },
  selectedBox: {
    backgroundColor: '#5F2EEA',
    width: 30,
    height: 30,
    borderRadius: 5,
    marginRight: 10,
  },
  orderHeader: {
    marginTop: 80,
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 12,
    justifyContent: 'center',
    marginBottom: 30,
  },
  imageBox: {
    justifyContent: 'center',
    marginHorizontal: '20%',
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
  buttonCheckout: {
    backgroundColor: '#5F2EEA',
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 50,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
