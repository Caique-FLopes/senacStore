import React from 'react';
import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import Label from '../../atoms/Label';
import style from './style';

interface Props {
  label?: string;
  icon?: ImageSourcePropType;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ label, onClick, icon }: Props) => {
  return (
    <TouchableOpacity onPress={onClick} style={style.button}>
      {icon && <Image source={icon} />}
      {label && (
        <Label
          text={label}
          fontSize={style.label.fontSize}
          color={style.label.color}
        />
      )}
    </TouchableOpacity>
  );
};
