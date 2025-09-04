import React from 'react';
import { View, Text } from 'react-native';
import { RootStackList } from '../../components/templates/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackList, 'Product'>;

const ProductScreen: React.FC<Props> = ({ route }) => {
  const { productId } = route.params;
  console.log(productId);
  return (
    <View>
      <Text>{productId}</Text>
    </View>
  );
};

export default ProductScreen;
