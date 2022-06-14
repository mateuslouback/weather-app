import React from 'react';
import { Card, Title, Desc } from './styles';

interface DetailWeatherType {
  title: string;
  desc: string | number;
}

export const DetailWeather = ({
  title,
  desc,
}: DetailWeatherType): JSX.Element => (
  <Card>
    <Title testID="detailWeather-title" fontWeight="semiBold">
      {title}
    </Title>
    <Desc testID="detailWeather-desc">{desc}</Desc>
  </Card>
);
