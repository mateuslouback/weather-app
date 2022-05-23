import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import * as Updates from 'expo-updates';
import * as Font from 'expo-font';
import Routes from './src/routes';

const App = () => {
  useEffect(() => {
    async function updateApp() {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          // ... notify user of update ...
          await Updates.reloadAsync();
        }
      } catch (error) {
        console.log('Erro ao atualizar App');
      }
    }
    updateApp();
  }, []);

  useEffect(() => {
    (async () =>
      await Font.loadAsync({
        'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
      }))();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Routes />
    </>
  );
};

export default App;
