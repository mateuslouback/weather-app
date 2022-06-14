import React from 'react';
import { TextInputProps } from 'react-native';
import { Input } from './styles';

export const CustomInput = ({ ...rest }: TextInputProps) => <Input {...rest} />;
