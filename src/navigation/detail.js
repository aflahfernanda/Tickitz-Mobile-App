import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Detail from '../screen/Detail';
import Order from '../screen/Order';

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
    </Stack.Navigator>
  );
}
