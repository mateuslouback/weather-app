import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { normalize } from '../../helpers';

export const Input = styled.TextInput`
  width: ${`${Dimensions.get('window').width - 100}px`};
  height: ${`${normalize(45)}px`};
  border-width: ${`${normalize(1)}px`};
  border-color: ${props => props.theme.FONT_CLEAR_COLOR};
  color: ${props => props.theme.FONT_CLEAR_COLOR};
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: ${`${normalize(22.5)}px`};
  padding-horizontal: ${`${normalize(17)}px`};
  font-size: ${`${normalize(14)}px`};
  margin-horizontal: ${`${normalize(20)}px`};
  font-family: ${props => props.theme.FONT_LIGHT_WEIGHT};
`;
