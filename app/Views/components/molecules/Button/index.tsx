import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Label } from '../../atoms/Label';
import style from './style';

interface Props {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ label, onClick }: Props) => {
  return (
    <TouchableOpacity onPress={onClick} style={style.button}>
      <Label text={label} style={style.label} />
    </TouchableOpacity>
  );
};
