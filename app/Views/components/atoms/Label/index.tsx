import React from 'react';
import { Text } from 'react-native';
import style from './style';

interface Props {
  text: string;
  fontSize?: number;
  color?: string;
}

const Label: React.FC<Props> = ({ text, fontSize, color }: Props) => {
  return (
    <Text style={{ ...style.label, fontSize: fontSize, color: color }}>
      {text}
    </Text>
  );
};

export default Label;
