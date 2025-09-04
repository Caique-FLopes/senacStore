import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Product } from '../../../../Repositories/Types/Product';

interface Props {
  product: Product;
  handleCardProduct: () => void;
}

const CardProduct: React.FC<Props> = ({ product, handleCardProduct }) => {
  function teste() {
    console.log('teste');
  }

  return (
    <TouchableOpacity
      key={product.id}
      style={{
        marginHorizontal: 10,
        backgroundColor: '#f7f7f7',
        borderRadius: 18,
        borderColor: '#ccc',
        borderWidth: 1,
        elevation: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
      }}
      onPress={() => handleCardProduct}
    >
      <View style={{}}>
        <Image
          source={{ uri: product.image }}
          style={{ width: 100, height: 120, objectFit: 'contain' }}
        />
      </View>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 14,
          marginTop: 16,
          maxWidth: 80,
          alignContent: 'center',
        }}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {product.title}
      </Text>
      <Text>R$ {product.price.toFixed(2).replace('.', ',')}</Text>
    </TouchableOpacity>
  );
};

export default CardProduct;
