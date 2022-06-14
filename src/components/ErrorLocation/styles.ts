import styled from 'styled-components/native';
import { CustomText } from '../CustomText';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 10000;
  padding-horizontal: 20px;
`;

export const ErrorTitle = styled(CustomText)`
  font-size: 20px;
  text-align: center;
  color: ${props => props.theme.FONT_DARK_COLOR};
  margin-bottom: 25px;
`;

export const ErrorDescription = styled(CustomText)`
  font-size: 14px;
  text-align: center;
  color: ${props => props.theme.FONT_DARK_COLOR};
  margin-bottom: 25px;
`;

export const IconError = styled.Image`
  resize-mode: contain;
  width: 225px;
  height: 170px;
`;
