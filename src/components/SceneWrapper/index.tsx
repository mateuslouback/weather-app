import React from 'react';
import { Image } from 'react-native';
import {
  SafeArea,
  Header,
  RefreshTouchable,
  Refresh,
  ScrollPage,
} from './styles';
import { CustomInput } from '../CustomInput';
import IconRefresh from '../../../assets/images/icons/refresh.png';

const IconRefreshUri = Image.resolveAssetSource(IconRefresh).uri;

type SceneWrapperType = {
  children: JSX.Element;
  onPress: () => void;
  onChangeText: (text: string) => void;
};

export const SceneWrapper = ({
  children,
  onPress,
  onChangeText,
}: SceneWrapperType): JSX.Element => (
  <>
    <SafeArea>
      <Header>
        <CustomInput
          testID="input-city"
          allowFontScaling={false}
          placeholder="Digite uma cidade"
          placeholderTextColor="#FFF"
          keyboardAppearance="dark"
          onChangeText={onChangeText}
          autoCompleteType="off"
          autoCorrect={false}
        />
        <RefreshTouchable onPress={onPress}>
          <Refresh source={{ uri: IconRefreshUri }} />
        </RefreshTouchable>
      </Header>
    </SafeArea>
    <ScrollPage bounces={false} showsHorizontalScrollIndicator={false}>
      {children}
    </ScrollPage>
  </>
);
