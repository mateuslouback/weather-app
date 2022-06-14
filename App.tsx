import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import * as Updates from 'expo-updates';
import * as Font from 'expo-font';
import Routes from './src/routes';
import PoppinsLight from './assets/fonts/Poppins-Light.ttf';
import PoppinsRegular from './assets/fonts/Poppins-Regular.ttf';
import PoppinsSemiBold from './assets/fonts/Poppins-SemiBold.ttf';
import { theme } from './src/theme';

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
    Font.loadAsync({
      'Poppins-Light': PoppinsLight,
      'Poppins-Regular': PoppinsRegular,
      'Poppins-SemiBold': PoppinsSemiBold,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
