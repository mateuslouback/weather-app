import styled from 'styled-components/native';
import { CustomText } from '../CustomText';

export const Card = styled.View`
  background-color: 'rgba(255, 255, 255, .25)';
  padding-horizontal: 15px;
  padding-vertical: 12px;
  height: 95px;
  width: 145px;
  margin-right: 12px;
  border-radius: 5px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled(CustomText)`
  color: ${props => props.theme.FONT_CLEAR_COLOR};
  font-size: 16px;
`;

export const Desc = styled(CustomText)`
  color: ${props => props.theme.FONT_CLEAR_COLOR};
  font-size: 30px;
`;
