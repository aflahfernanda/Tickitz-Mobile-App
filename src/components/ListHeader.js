import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../screen/List/styles';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

function ListHeader(props) {
  const [openDropdown, setOpenDrodown] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'A-Z', value: 'name ASC'},
    {label: 'Z-A', value: 'name DESC'},
  ]);
  const handleSearchName = nameMovie => {
    props.handleSearchName(nameMovie);
  };
  const handleSearchRelease = name => {
    props.handleSearchRelease(name);
  };
  const handleSortMovie = value => {
    props.handleSortMovie(value);
  };
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
            onChangeValue={handleSortMovie}
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
}

export default ListHeader;
