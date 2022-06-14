/* eslint-disable react/require-default-props */
import React from 'react';
import { TextProps } from 'react-native';

import { Text } from './styles';

type CustomTextType = TextProps & {
  children: React.ReactNode;
  fontWeight?: string;
};

export const CustomText = ({
  children,
  fontWeight,
  ...rest
}: CustomTextType): JSX.Element => (
  <Text {...rest} fontWeight={fontWeight}>
    {children}
  </Text>
);
