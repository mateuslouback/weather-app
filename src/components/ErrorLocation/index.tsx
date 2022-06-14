import React from 'react';
import { Image } from 'react-native';
import { Container, ErrorTitle, ErrorDescription, IconError } from './styles';
import IconErrorImage from '../../../assets/images/icons/error.png';

const IconErrorImageUri = Image.resolveAssetSource(IconErrorImage).uri;

interface ErrorLocationType {
  title: string;
  desc: string;
}

export const ErrorLocation = ({
  title,
  desc,
}: ErrorLocationType): JSX.Element => (
  <Container>
    <IconError source={{ uri: IconErrorImageUri }} />
    <ErrorTitle testID="errorLocation-title" fontWeight="SemiBold">
      {title}
    </ErrorTitle>
    <ErrorDescription testID="errorLocation-desc">{desc}</ErrorDescription>
  </Container>
);
