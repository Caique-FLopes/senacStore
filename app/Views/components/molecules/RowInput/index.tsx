import React from 'react';
import { Platform, View } from 'react-native';
import { Input } from '../../atoms/Input';
import Label from '../../atoms/Label';

interface Props {
  label?: string;
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
    <View style={{ width: '80%' }}>
      {label && Platform.OS !== 'ios' && <Label text={label} />}
      <Input
        placeholder={placeholder}
        handleChange={handleChange}
        security={security}
      />
    </View>
  );
};
