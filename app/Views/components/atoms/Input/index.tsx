import React from 'react';
import { StyleProp, TextInput, TextStyle } from 'react-native';

interface Props {
  placeholder: string;
  security?: boolean;
  style?: StyleProp<TextStyle>;
  handleChange: (value: string) => void;
}

export const Input: React.FC<Props> = ({
  placeholder,
  style,
  security = false,
  handleChange,
}: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={style}
      onChangeText={value => handleChange(value)}
      secureTextEntry={security}
    />
  );
};
