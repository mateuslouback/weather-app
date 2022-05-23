import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  z-index: 10000;
  padding-horizontal: 20px;
`;

export const ErrorTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #7E7E7E;
  margin-bottom: 25px;
  font-weight: bold;
`;

export const ErrorDescription = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #7E7E7E;
  margin-bottom: 25px;
`;

export const IconError = styled.Image`
  resize-mode: contain;
  width: 225px;
  height: 170px;
`;
