import React from 'react';
import { StyleProp, TextInput, TextStyle } from 'react-native';
import style from './style';

interface Props {
  placeholder: string;
  security?: boolean;
  style?: StyleProp<TextStyle>;
  handleChange: (value: string) => void;
  value?: string;
}

export const Input: React.FC<Props> = ({
  placeholder,
  security = false,
  handleChange,
}: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={style.input}
      onChangeText={value => handleChange(value)}
      secureTextEntry={security}
      placeholderTextColor={style.placeholder.color}
    />
  );
};
