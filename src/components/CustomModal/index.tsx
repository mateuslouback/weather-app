import React from 'react';
import Modal from 'react-native-modal';
import { Image } from 'react-native';
import {
  ContentModalError,
  ModalIcon,
  TitleModalError,
  SubTitleModalError,
  ButtonModalError,
  TextButtonModalError,
} from './styles';
import IconErrorImage from '../../../assets/images/icons/error.png';

const IconErrorImageUri = Image.resolveAssetSource(IconErrorImage).uri;

type CustomModalType = {
  modalShow: boolean;
  onpress: () => void;
  title: string;
  subTitle: string;
};

export const CustomModal = ({
  modalShow,
  onpress,
  title,
  subTitle,
}: CustomModalType) => (
  <Modal isVisible={modalShow} backdropOpacity={0.4}>
    <ContentModalError>
      <ModalIcon
        source={{
          uri: IconErrorImageUri,
        }}
        resizeMode="contain"
      />
      <TitleModalError fontWeight="semiBold">{title}</TitleModalError>
      <SubTitleModalError>{subTitle}</SubTitleModalError>
      <ButtonModalError onPress={onpress}>
        <TextButtonModalError>Fechar</TextButtonModalError>
      </ButtonModalError>
    </ContentModalError>
  </Modal>
);
