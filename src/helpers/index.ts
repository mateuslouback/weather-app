import { Platform, PixelRatio, Dimensions } from 'react-native';

const width = Math.round(Dimensions.get('window').width);
const scale = width / 375;

export const normalize = (size: number): number => {
  const newSize = size * scale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};
