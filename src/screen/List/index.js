import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from '../../utils/axios';
import Footer from '../../components/Footer';
import styles from './styles';
import ListHeader from '../../components/ListHeader';

function ListScreen(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [totalData, setTotalData] = useState(10);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  const [searchRelease, setSearchRelease] = useState('');
  const [searchName, setSearchName] = useState('');
  const [sortName, setSortName] = useState('');
  const [openDropdown, setOpenDrodown] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'A-Z', value: 'name ASC'},
    {label: 'Z-A', value: 'name DESC'},
  ]);
  useEffect(() => {
    console.log('getData');
    getDataMovie();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      getDataMovie();
    }, 1000);
  }, [page, searchRelease, searchName, sortName]);

  const getDataMovie = async () => {
    try {
      setRefresh(false);
      setLoading(false);
      setLoadMore(false);
      if (page <= totalPage) {
        const result = await axios.get(
          `movie?page=${page}&limit=4&sort=${sortName}&searchRelease=${searchRelease}&searchName=${searchName}`,
        );
        console.log(result.data.data);
        if (page === 1) {
          setData(result.data.data);
        } else {
          setData([...data, ...result.data.data]);
        }
        setTotalPage(result.data.pagination.totalPage);
        setTotalData(result.data.pagination.totalData);
      }
      if (totalPage === 0) {
        const result = await axios.get(
          `movie?page=${page}&limit=4&sort=${sortName}&searchRelease=${searchRelease}&searchName=${searchName}`,
        );
        console.log(result.data.data);
        if (page === 1) {
          setData(result.data.data);
        } else {
          setData([...data, ...result.data.data]);
        }
        setTotalPage(result.data.pagination.totalPage);
        setTotalData(result.data.pagination.totalData);
      } else {
        setLast(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(totalPage);
  const handleRefresh = () => {
    console.log('REFRESH SCREEN');
    setPage(1);
    setLast(false);
    if (page !== 1) {
      setRefresh(true);
    } else {
      getDataMovie();
    }
  };

  const handleLoadMore = () => {
    console.log('LOAD MORE DATA');
    if (!loadMore) {
      const newPage = page + 1;
      setLoadMore(true);
      if (newPage <= totalPage + 1) {
        setLoading(true);
        setPage(newPage);
      } else {
        setLoading(false);
      }
    }
  };
  const handleSearchRelease = name => {
    setSearchRelease(name);
    console.log(name);
  };
  const handleSearchName = nameMovie => {
    setSearchName(nameMovie);
    console.log(nameMovie);
  };
  const handleSortMovie = value => {
    setSortName(value);
    console.log(value);
  };
  const handleDetail = id => {
    props.navigation.navigate('Detail', {id: id});
  };
  return (
    <View style={styles.row}>
      <FlatList
        data={data}
        numColumns="2"
        ListHeaderComponent={
          <ListHeader
            handleSearchRelease={handleSearchRelease}
            handleSearchName={handleSearchName}
            handleSortMovie={handleSortMovie}
          />
        }
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.cardUpcoming} key={item.id}>
            <Image
              source={{
                uri: `https://res.cloudinary.com/da776aoko/image/upload/v1651001489/${item.image}`,
              }}
              style={styles.imageCard}
            />
            <Text style={styles.movieText}>{item.name}</Text>
            <Text style={styles.movieText2}>{item.category}</Text>
            <TouchableOpacity
              style={styles.buttonUpcoming}
              onPress={id => handleDetail(item.id)}>
              <Text style={styles.buttonViewAllText}>Detail</Text>
            </TouchableOpacity>
          </View>
        )}
        onRefresh={handleRefresh}
        refreshing={refresh}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={1.0}
        ListFooterComponent={() =>
          totalData === 0 ? (
            <View>
              <Text>-- No more data --</Text>
              <Footer />
            </View>
          ) : loading ? (
            <ActivityIndicator size="large" color="blue" />
          ) : (
            <View>
              <Text>-- No more data --</Text>
              <Footer />
            </View>
          )
        }
      />
    </View>
  );
}

export default ListScreen;
