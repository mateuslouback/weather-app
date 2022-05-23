import styled from 'styled-components/native';

export const Card = styled.View`
  background-color: "rgba(255, 255, 255, .25)";
  padding-horizontal: 15px;
  padding-vertical: 12px;
  height: 95px;
  width: 145px;
  margin-right: 12px;
  border-radius: 5px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-family: "Poppins-SemiBold";
`;

export const Desc = styled.Text`
  color: #FFF;
  font-size: 30px;
  font-family: "Poppins-Regular";
`;
