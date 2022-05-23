import { Dimensions, Platform } from "react-native";
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${(props: {backgroundColor: string}) => props.backgroundColor};
`;

export const SafeArea = styled.SafeAreaView`
  width: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: 20px;
  margin-top: ${Platform.OS === 'android' ? '40px' : '0px'};
`;

export const Input = styled.TextInput`
  width: ${(Dimensions.get('window').width - 100) + 'px'};
  height: 45px;
  border-width: 1px;
  border-color: #FFF;
  background-color: rgba(255, 255, 255, .2);
  border-radius: 22.5px;
  padding-horizontal: 17px;
  font-size: 14px;
  margin-horizontal: 20px;
  color: #FFF;
  font-family: 'Poppins-Light';
`;

export const RefreshTouchable = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  margin-right: 20px;
`;

export const Refresh = styled.Image`
  height: 40px;
  width: 40px;
  margin-right: 20px;
  resize-mode: contain;
`;

export const Icon = styled.Image`
  width: 220px;
  height: 220px;
  align-self: center;
  margin-vertical: 20px;
  resize-mode: contain;
`;

export const City = styled.Text`
  align-self: center;
  margin-top: 30px;
  font-size: 30px;
  text-align: center;
  color: #FFFFFF;
  font-family: 'Poppins-Light';
`;

export const Graus = styled.Text`
  align-self: center;
  font-size: 90px;
  text-align: center;
  color: #FFFFFF;
  font-family: 'Poppins-Light';
`;

export const Description = styled.Text`
  align-self: center;
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;
  color: #FFF;
  font-family: 'Poppins-Light';
  text-transform: capitalize;
`;

export const ScrollCards = styled.ScrollView`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 30px;
  padding-horizontal: 20px;
  align-self: flex-end;
`;

export const ScrollPage = styled.ScrollView`
    flex: 1;
    width: ${Dimensions.get('window').width + 'px'};
    flex-direction: column;
`;

export const Loading = styled.ActivityIndicator`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255,255,255,.5),
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
