import styled from 'styled-components/native';
import { CustomText } from '../../components/CustomText';
import { normalize } from '../../helpers';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${(props: { backgroundColor: string }) =>
    props.backgroundColor};
`;

export const Icon = styled.Image`
  width: ${`${normalize(220)}px`};
  height: ${`${normalize(220)}px`};
  align-self: center;
  margin-vertical: ${`${normalize(20)}px`};
  resize-mode: contain;
`;

export const City = styled(CustomText)`
  align-self: center;
  margin-top: ${`${normalize(30)}px`};
  font-size: ${`${normalize(30)}px`};
  text-align: center;
`;

export const Graus = styled(CustomText)`
  align-self: center;
  font-size: ${`${normalize(90)}px`};
  text-align: center;
`;

export const Description = styled(CustomText)`
  align-self: center;
  margin-bottom: ${`${normalize(20)}px`};
  font-size: ${`${normalize(16)}px`};
  text-align: center;
  text-transform: capitalize;
`;

export const ScrollCards = styled.ScrollView`
  width: 100%;
  margin-top: ${`${normalize(40)}px`};
  margin-bottom: ${`${normalize(40)}px`};
  padding-horizontal: ${`${normalize(20)}px`};
  align-self: flex-end;
`;

export const Loading = styled.ActivityIndicator`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

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
