import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductsService from '../../../Repositories/Products/ProductsService';
import ButtonCategorie from '../../components/organisms/ButtonCategorie/Index';
import { FlatList } from 'react-native';

const Perfil = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function getCategories() {
      const categ = await ProductsService.getCategories();
      setCategories(categ);
    }
    getCategories();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => <ButtonCategorie name={item} />}
        horizontal={true}
      />
    </SafeAreaView>
  );
};

export default Perfil;
