import React from 'react';
import { render } from '@testing-library/react-native';
import { DetailWeather } from '.';

describe('DetailWeather component', () => {
  it('should render title and desc properties', () => {
    const { getByTestId } = render(
      <DetailWeather title="Test title" desc="Test desc" />,
    );

    const detailWeatherComponentPropTitle = getByTestId('detailWeather-title');
    expect(detailWeatherComponentPropTitle.props.children).toEqual(
      'Test title',
    );

    const detailWeatherComponentPropDesc = getByTestId('detailWeather-desc');
    expect(detailWeatherComponentPropDesc.props.children).toEqual('Test desc');
  });
});
