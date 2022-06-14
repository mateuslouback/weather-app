import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';
import { normalize } from '../../helpers';

export const SafeArea = styled.SafeAreaView`
  width: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: ${`${normalize(20)}px`};
  margin-top: ${Platform.OS === 'android' ? `${normalize(40)}px` : '0px'};
`;

export const ScrollPage = styled.ScrollView`
  flex: 1;
  width: ${`${Dimensions.get('window').width}px`};
  flex-direction: column;
`;

export const RefreshTouchable = styled.TouchableOpacity`
  height: ${`${normalize(40)}px`};
  width: ${`${normalize(40)}px`};
`;

export const Refresh = styled.Image`
  height: ${`${normalize(40)}px`};
  width: ${`${normalize(40)}px`};
  margin-right: ${`${normalize(20)}px`};
  resize-mode: contain;
`;
