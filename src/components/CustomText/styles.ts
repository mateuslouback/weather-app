import styled from 'styled-components/native';

const handleFontType = (font: string) => {
  switch (font) {
    case 'semiBold':
      return props => props.theme.FONT_SEMI_BOLD_WEIGHT;
    case 'light':
      return props => props.theme.FONT_LIGHT_WEIGHT;
    default:
      return props => props.theme.FONT_REGULAR_WEIGHT;
  }
};

export const Text = styled.Text`
  color: #ffffff;
  font-family: ${(props: { fontWeight?: string }) =>
    handleFontType(props.fontWeight)};
`;
