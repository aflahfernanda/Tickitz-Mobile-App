import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import Header from '../../components/Header';

export default function Midtrans(props) {
  const midtrans = props.route.params.midtrans;
  console.log(midtrans);
  return (
    <WebView
      source={{
        uri: `${midtrans}`,
      }}
      //   style={{marginTop: 20}}
    />
  );
}
