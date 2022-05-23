import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import api from '../../services/api';
import { API_TOKEN } from '@env';
import { debounce } from 'lodash';
import {
  Container,
  SafeArea,
  Header,
  Input,
  Refresh,
  Icon,
  RefreshTouchable,
  City,
  Graus,
  Description,
  ScrollCards,
  ScrollPage,
  Loading,
} from './styles';
import { DetailWeather } from '../../components/DetailWeather';
import { ErrorLocation } from '../../components/ErrorLocation';
import imageIcon from '../../../assets/images/icons/icons.json';
import Background from './bg.json';

interface WeatherData {
  main: {
    temp_max: number;
    humidity: string;
    pressure: string;
    temp_min: number;
    temp: number;
  };
  clouds: {
    all: string;
  };
  wind: {
    speed: string;
  };
  weather: [{ description: string }];
  name: string;
}

export const Main = (): JSX.Element => {
  const [location, setLocation] = useState([0, 0]);
  const [errorLocation, setErrorLocation] = useState(false);
  const [hiddenLoad, setHiddenLoad] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [icon, setIcon] = useState();
  const [bgColor, setBgColor] = useState('');

  const loadWeather = (location: any) => {
    setHiddenLoad(false);
    api
      .get(
        `?lat=${location[0]}&lon=${location[1]}&appid=${API_TOKEN}&lang=pt_br`,
      )
      .then(response => {
        setWeatherData(response?.data);
        const nameIcon = response?.data.weather[0].icon;
        setIcon(imageIcon[nameIcon]);
        defineBackground(nameIcon);
        setHiddenLoad(true);
      })
      .catch(() => {
        Alert.alert(
          'Erro ao carregar a previsão do tempo.',
          'Tente novamente mais tarde.',
          [{ text: 'OK' }],
          {
            cancelable: false,
          },
        );
        setHiddenLoad(true);
      });
  };

  const loadWeatherCity = (city: string) => {
    setHiddenLoad(false);
    api
      .get(`?q=${city}&appid=${API_TOKEN}&lang=pt_br`)
      .then(response => {
        setWeatherData(response?.data);
        const nameIcon = response?.data.weather[0].icon;
        setIcon(imageIcon[nameIcon]);
        defineBackground(nameIcon);
        setHiddenLoad(true);
      })
      .catch(() => {
        Alert.alert(
          'Cidade não encontrada!',
          'Confira o nome da cidade e tente novamente.',
          [{ text: 'OK' }],
          {
            cancelable: false,
          },
        );
        setHiddenLoad(true);
      });
  };

  const handleCity = debounce((text: string) => {
    if (text !== '') {
      loadWeatherCity(text.trim());
    }
  }, 1500);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        let isDeviceLocationEnabled = await Location.hasServicesEnabledAsync();

        if (isDeviceLocationEnabled) {
          try {
            const dataLocation = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = dataLocation.coords;
            setLocation([latitude, longitude]);
            loadWeather([latitude, longitude]);
          } catch (error) {
            Alert.alert(
              'Erro',
              'O provedor de localização não está disponível. Certifique-se de que os serviços de localização estão ativados',
            );
          }
        } else {
          setErrorLocation(true);
          setHiddenLoad(true);
        }
      } else {
        setErrorLocation(true);
        setHiddenLoad(true);
      }
    })();
  }, []);

  function defineBackground(icon: string) {
    switch (icon) {
      case '01d':
      case '50d':
        setBgColor(Background.color_one);
        break;
      case '01n':
      case '50n':
        setBgColor(Background.color_five);
        break;
      case '02d':
      case '02n':
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        setBgColor(Background.color_two);
        break;
      case '09d':
      case '09n':
      case '13d':
      case '13n':
        setBgColor(Background.color_tree);
        break;
      case '10d':
      case '10n':
      case '11d':
      case '11n':
        setBgColor(Background.color_four);
        break;
    }
  }

  return (
    <>
      <StatusBar style="light" />
      {errorLocation && (
        <ErrorLocation
          title="Sem permissão para acessar sua Localização."
          desc="Vá em configurações do App e conceda a permissão de uso da Localização o
        tempo todo."
        />
      )}
      {!hiddenLoad && <Loading size="large" color="#000" />}
      {weatherData && (
        <Container
          testID="background-color"
          backgroundColor={bgColor || '#fff'}
        >
          <SafeArea>
            <Header>
              <Input
                testID="input-city"
                allowFontScaling={false}
                placeholder="Digite uma cidade"
                placeholderTextColor="#FFF"
                keyboardAppearance="dark"
                onChangeText={text => handleCity(text)}
                autoCompleteType="off"
                autoCorrect={false}
              />
              <RefreshTouchable onPress={() => loadWeather(location)}>
                <Refresh
                  source={require('../../../assets/images/icons/refresh.png')}
                />
              </RefreshTouchable>
            </Header>
          </SafeArea>
          <ScrollPage bounces={false} showsHorizontalScrollIndicator={false}>
            <Icon source={{ uri: icon }} />
            <City>{weatherData?.name}</City>
            <Graus>{(weatherData?.main.temp - 273.15).toFixed(0)}º</Graus>
            <Description>{weatherData?.weather[0].description}</Description>
            <ScrollCards
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <DetailWeather
                title="Máxima"
                desc={`${(weatherData?.main.temp_max - 273.15).toFixed(0)}º`}
              />
              <DetailWeather
                title="Mínima"
                desc={`${(weatherData?.main.temp_min - 273.15).toFixed(0)}º`}
              />
              <DetailWeather
                title="Humidade"
                desc={weatherData?.main?.humidity + '%'}
              />
              <DetailWeather
                title="Pressão"
                desc={weatherData?.main?.pressure}
              />
              <DetailWeather
                title="Ventos km/h"
                desc={weatherData?.wind?.speed}
              />
              <DetailWeather
                title="Nuvens"
                desc={weatherData?.clouds?.all + '%'}
              />
              <View style={{ width: 25 }} />
            </ScrollCards>
          </ScrollPage>
        </Container>
      )}
    </>
  );
};
