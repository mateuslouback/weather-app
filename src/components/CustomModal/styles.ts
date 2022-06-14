import styled from 'styled-components/native';
import { CustomText } from '../CustomText';
import { normalize } from '../../helpers';

export const ContentModalError = styled.View`
  background-color: #fff;
  width: 100%;
  border-radius: ${`${normalize(8)}px`};
  height: ${`${normalize(360)}px`};
  padding: ${`${normalize(20)}px`};
  justify-content: center;
  align-items: center;
`;

export const ModalIcon = styled.Image`
  width: ${`${normalize(150)}px`};
  height: ${`${normalize(125)}px`};
`;

export const TitleModalError = styled(CustomText)`
  font-size: ${`${normalize(20)}px`};
  margin-bottom: ${`${normalize(15)}px`};
  color: ${props => props.theme.FONT_DARK_COLOR};
`;

export const SubTitleModalError = styled(CustomText)`
  font-size: ${`${normalize(14)}px`};
  margin-bottom: ${`${normalize(15)}px`};
  color: ${props => props.theme.FONT_DARK_COLOR};
  text-align: center;
`;

export const ButtonModalError = styled.TouchableOpacity`
  border: solid ${`${normalize(1)}px`} ${props => props.theme.FONT_DARK_COLOR};
  border-radius: ${`${normalize(5)}px`};
  padding: ${`${normalize(10)}px`};
  width: ${`${normalize(100)}px`};
  margin-top: ${`${normalize(15)}px`};
  align-items: center;
`;

export const TextButtonModalError = styled(CustomText)`
  font-size: ${`${normalize(12)}px`};
  color: ${props => props.theme.FONT_DARK_COLOR};
`;
