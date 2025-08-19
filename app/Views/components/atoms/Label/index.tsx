import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

interface Props {
  text: string;
  style?: StyleProp<TextStyle>;
}

export const Label: React.FC<Props> = ({ text, style }: Props) => {
  return <Text style={style}>{text}</Text>;
};
