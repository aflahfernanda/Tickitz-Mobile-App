import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: 'white',
    padding: 5,
  },
  imageHeader: {
    resizeMode: 'stretch',
    width: 90,
    height: 35,
  },
  container: {
    padding: 20,
  },
  cardTicket: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
  },
  qrCode: {
    marginHorizontal: 33,
    resizeMode: 'stretch',
    width: 250,
    height: 250,
    marginBottom: 90,
  },
  textFlex: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  textFlex1: {
    flex: 1,
    marginRight: 30,
  },
  textFlex2: {
    flex: 1,
  },
  detailTitle: {
    fontSize: 15,
  },
  detailInfo: {
    fontSize: 17,
    color: 'black',
  },
  textFlexs: {
    flexDirection: 'row',
    marginBottom: 30,
    backgroundColor: 'gainsboro',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  detailInfos: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
});
