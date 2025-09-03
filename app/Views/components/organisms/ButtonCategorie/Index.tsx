import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Label from '../../atoms/Label';
import Img from '../../atoms/Img';

interface Props {
  name: string;
}
const images: Record<string, any> = {
  electronics: require('../../../../assets/images/electronics.png'),
  jewelery: require('../../../../assets/images/jewelery.png'),
  "men's clothing": require("../../../../assets/images/men's-clothing.png"),
  "women's clothing": require("../../../../assets/images/women's-clothing.png"),
};

const ButtonCategorie: React.FC<Props> = ({ name }: Props) => {
  const key = name.split(' ').join('-').toLowerCase();
  const source = images[key];
  return (
    <View>
      <TouchableOpacity>
        <Img src={source} />
      </TouchableOpacity>
      <Label text={name} />
    </View>
  );
};

export default ButtonCategorie;
