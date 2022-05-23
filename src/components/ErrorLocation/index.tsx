import React from 'react';
import { Container, ErrorTitle, ErrorDescription, IconError } from './styles';

interface ErrorLocation {
  title: string;
  desc: string;
}

export const ErrorLocation = ({ title, desc }: ErrorLocation): JSX.Element => {
  return (
    <Container>
      <IconError source={require('../../../assets/images/icons/error.png')} />
      <ErrorTitle testID="errorLocation-title">{title}</ErrorTitle>
      <ErrorDescription testID="errorLocation-desc">{desc}</ErrorDescription>
    </Container>
  );
};
