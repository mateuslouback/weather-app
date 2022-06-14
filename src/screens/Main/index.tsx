import React, { useState, useEffect, useContext } from 'react';
import { View, Alert } from 'react-native';
import { ThemeContext } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import { API_TOKEN } from 'react-native-dotenv';
import { debounce } from 'lodash';
import api from '../../api/api';
import { SceneWrapper } from '../../components/SceneWrapper';
import { CustomModal } from '../../components/CustomModal';
import {
  Container,
  Icon,
  City,
  Graus,
  Description,
  ScrollCards,
  Loading,
} from './styles';
import { DetailWeather } from '../../components/DetailWeather';
import { ErrorLocation } from '../../components/ErrorLocation';
import imageIcon from '../../../assets/images/icons/icons.json';

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
  const [modalShow, setModalShow] = useState(false);
  const [bgColor, setBgColor] = useState('');
  const themeContext = useContext(ThemeContext);

  function defineBackground(iconWeather: string) {
    switch (iconWeather) {
      case '01d':
      case '50d':
        setBgColor(themeContext.BG_WEATHER[0]);
        break;
      case '01n':
      case '50n':
        setBgColor(themeContext.BG_WEATHER[4]);
        break;
      case '02d':
      case '02n':
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        setBgColor(themeContext.BG_WEATHER[1]);
        break;
      case '09d':
      case '09n':
      case '13d':
      case '13n':
        setBgColor(themeContext.BG_WEATHER[2]);
        break;
      case '10d':
      case '10n':
      case '11d':
      case '11n':
        setBgColor(themeContext.BG_WEATHER[3]);
        break;
      default:
        setBgColor(themeContext.BG_WEATHER[0]);
    }
  }

  const loadWeather = async (locations: Array<number>) => {
    setHiddenLoad(false);
    try {
      const response = await api.get(
        `?lat=${locations[0]}&lon=${locations[1]}&appid=${API_TOKEN}&lang=pt_br`,
      );
      setWeatherData(response?.data);
      const nameIcon = response?.data.weather[0].icon;
      setIcon(imageIcon[nameIcon]);
      defineBackground(nameIcon);
      setHiddenLoad(true);
    } catch (error) {
      Alert.alert(
        'Erro ao carregar a previsão do tempo.',
        'Tente novamente mais tarde.',
        [{ text: 'OK' }],
        {
          cancelable: false,
        },
      );
      setHiddenLoad(true);
    }
  };

  const loadWeatherCity = async (city: string) => {
    setHiddenLoad(false);
    try {
      const response = await api.get(
        `?q=${city}&appid=${API_TOKEN}&lang=pt_br`,
      );
      setWeatherData(response?.data);
      const nameIcon = response?.data.weather[0].icon;
      setIcon(imageIcon[nameIcon]);
      defineBackground(nameIcon);
      setHiddenLoad(true);
    } catch (error) {
      setModalShow(!modalShow);
      setHiddenLoad(true);
    }
  };

  const getLocationUser = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status === 'granted') {
      const isDeviceLocationEnabled = await Location.hasServicesEnabledAsync();

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
  };

  const handleCity = debounce((text: string) => {
    if (text !== '') {
      loadWeatherCity(text.trim());
    }
  }, 1500);

  useEffect(() => {
    getLocationUser();
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <CustomModal
        onpress={() => setModalShow(!modalShow)}
        modalShow={modalShow}
        title="Cidade não encontrada"
        subTitle="Confira o nome da cidade e tente novamente."
      />
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
          <SceneWrapper
            onPress={() => loadWeather(location)}
            onChangeText={(text: string) => handleCity(text)}
          >
            <>
              <Icon source={{ uri: icon }} />
              <City>{weatherData?.name}</City>
              <Graus>
                {`${(weatherData?.main.temp - 273.15).toFixed(0)}º`}
              </Graus>
              <Description>{weatherData?.weather[0].description}</Description>
              <ScrollCards horizontal showsHorizontalScrollIndicator={false}>
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
                  desc={`${weatherData?.main?.humidity}%`}
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
                  desc={`${weatherData?.clouds?.all}%`}
                />
                <View style={{ width: 25 }} />
              </ScrollCards>
            </>
          </SceneWrapper>
        </Container>
      )}
    </>
  );
};
