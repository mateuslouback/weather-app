import React from 'react';
import { Card, Title, Desc } from './styles';

interface DetailWeather {
  title: string;
  desc: string | number | undefined;
}

export const DetailWeather = ({ title, desc }: DetailWeather): JSX.Element => {
  return (
    <Card>
      <Title testID="detailWeather-title">{title}</Title>
      <Desc testID="detailWeather-desc">{desc}</Desc>
    </Card>
  );
};
