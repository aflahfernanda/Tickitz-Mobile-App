import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Detail from '../screen/Detail';
import Order from '../screen/Order';
import Payment from '../screen/Payment';
import Result from '../screen/Result';

export default function DetailNavigator() {
  return (
    <Stack.Navigator initialRouteName="Detail">
      <Stack.Screen
        component={Detail}
        name="Detail"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Order}
        name="Order"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Payment}
        name="Payment"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Result}
        name="Result"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
