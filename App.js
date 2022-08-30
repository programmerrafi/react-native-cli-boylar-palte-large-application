import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler'
import { store } from "./app/redux/store";
import { Provider } from "react-redux";
import AppNavigator from './app/navigation/AppNavigator';
import { StatusBar } from 'react-native'

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;