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

function ListScreen(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  const [searchRelease, setSearchRelease] = useState(0);
  const [searchName, setSearchName] = useState('');
  const [openDropdown, setOpenDrodown] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'A-Z', value: 'name ASC'},
    {label: 'Z-A', value: 'name DESC'},
  ]);
  useEffect(() => {
    setTimeout(() => {
      getDataMovie();
    }, 2000);
  }, [page, searchRelease, searchName, value]);

  const getDataMovie = async () => {
    try {
      setRefresh(false);
      setLoading(false);
      setLoadMore(false);
      if (page <= totalPage) {
        const result = await axios.get(
          `movie?page=1&limit=4&sort=${value}&searchRelease=${searchRelease}&searchName=${searchName}`,
        );
        if (page === 1) {
          setData(result.data.data);
        } else {
          setData([...data, ...result.data.data]);
        }
        setTotalPage(result.data.pagination.totalPage);
      } else {
        setLast(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
  console.log(value);
  const ListHeader = () => {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.nowShowing}>List Movie</Text>
        </View>
        <View style={styles.flex}>
          <View style={styles.flex1}>
            <DropDownPicker
              open={openDropdown}
              value={value}
              items={items}
              setOpen={setOpenDrodown}
              setValue={setValue}
              setItems={setItems}
              style={styles.sort}
            />
          </View>
          <View style={styles.flex2}>
            <TextInput
              placeholder="search movie name.."
              style={styles.textInputBoxs}
              onChangeText={nameMovie => handleSearchName(nameMovie)}
            />
          </View>
        </View>
        <ScrollView style={styles.scroll} horizontal>
          <TouchableOpacity
            style={styles.button}
            onPress={name => handleSearchRelease('')}>
            <Text style={styles.buttonText}>All Month</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={name => handleSearchRelease('1')}>
            <Text style={styles.buttonText}>January</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={name => handleSearchRelease('2')}>
            <Text style={styles.buttonText}>February</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={name => handleSearchRelease('3')}>
            <Text style={styles.buttonText}>March</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={name => handleSearchRelease('4')}>
            <Text style={styles.buttonText}>April</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={name => handleSearchRelease('5')}>
            <Text style={styles.buttonText}>May</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={name => handleSearchRelease('6')}>
            <Text style={styles.buttonText}>June</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={name => handleSearchRelease('7')}>
            <Text style={styles.buttonText}>July</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={name => handleSearchRelease('8')}>
            <Text style={styles.buttonText}>August</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={name => handleSearchRelease('9')}>
            <Text style={styles.buttonText}>September</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={name => handleSearchRelease('10')}>
            <Text style={styles.buttonText}>October</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={name => handleSearchRelease('11')}>
            <Text style={styles.buttonText}>November</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={name => handleSearchRelease('12')}>
            <Text style={styles.buttonText}>December</Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    );
  };

  console.log(refresh);
  return (
    <View style={styles.row}>
      <FlatList
        data={data}
        ListHeaderComponent={ListHeader}
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
            <TouchableOpacity style={styles.buttonUpcoming}>
              <Text style={styles.buttonViewAllText}>Detail</Text>
            </TouchableOpacity>
          </View>
        )}
        onRefresh={handleRefresh}
        refreshing={refresh}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() =>
          last ? (
            <View>
              <Text>-- No more data --</Text>
              <Footer />
            </View>
          ) : loading ? (
            <ActivityIndicator size="large" color="blue" />
          ) : null
        }
      />
    </View>
  );
}

export default ListScreen;
