import React from 'react';
import MainStackNavigator from './src/navigation';
import {Provider} from 'react-redux';
import stores from './src/store';
import {PersistGate} from 'redux-persist/es/integration/react';
const {persistor, store} = stores;

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainStackNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
