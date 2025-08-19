import React from 'react';
import { View } from 'react-native';
import { Input } from '../../atoms/Input';
import { Label } from '../../atoms/Label';
import style from './style';

interface Props {
  label: string;
  placeholder: string;
  security?: boolean;
  handleChange: (value: string) => void;
}

export const RowInput: React.FC<Props> = ({
  label,
  placeholder,
  security = false,
  handleChange,
}: Props) => {
  return (
    <View>
      <Label text={label} style={style.label} />
      <Input
        placeholder={placeholder}
        style={style.input}
        handleChange={handleChange}
        security={security}
      />
    </View>
  );
};
