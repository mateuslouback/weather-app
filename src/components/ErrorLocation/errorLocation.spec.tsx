import React from 'react';
import { render } from '@testing-library/react-native';
import { ErrorLocation } from '.';

describe('ErrorLocation component', () => {
  it('should render title and desc properties', () => {
    const { getByTestId } = render(
      <ErrorLocation title="Test title" desc="Test desc" />,
    );

    const errorLocationComponentPropTitle = getByTestId('errorLocation-title');
    expect(errorLocationComponentPropTitle.props.children).toEqual(
      'Test title',
    );

    const errorLocationComponentPropDesc = getByTestId('errorLocation-desc');
    expect(errorLocationComponentPropDesc.props.children).toEqual('Test desc');
  });
});
