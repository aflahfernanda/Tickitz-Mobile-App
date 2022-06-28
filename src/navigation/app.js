import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screen/Home';
import DrawerContent from '../components/DrawerContent';
import Header from '../components/Header';
import Detail from '../screen/Detail';
import Profile from '../screen/Profile';
import List from '../screen/List';
import Order from '../screen/Order';
import Payment from '../screen/Payment';
import Midtrans from '../screen/Midtrans';
import Result from '../screen/Result';
import Notification from '../screen/Notification';
function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        component={Home}
        name="Home"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Detail}
        name="Detail"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Order}
        name="Order"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Payment}
        name="Payment"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Midtrans}
        name="Midtrans"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function ProfileNavigator() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        component={Profile}
        name="Profile"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Result}
        name="Result"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function NotificationNavigator() {
  return (
    <Stack.Navigator initialRouteName="Notification">
      <Stack.Screen
        component={Notification}
        name="Notification"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function ListNavigator() {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        component={List}
        name="List"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function AppNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{drawerPosition: 'right'}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        component={HomeNavigator}
        name="HomeNavigator"
        options={{
          title: 'Home',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={ProfileNavigator}
        name="ProfileNavigator"
        options={{
          title: 'Profile',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={ListNavigator}
        name="ListNavigator"
        options={{
          title: 'List Movie',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="film" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={NotificationNavigator}
        name="NotificationNavigator"
        options={{
          title: 'Notification',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="film" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default (HomeNavigator, AppNavigator);
