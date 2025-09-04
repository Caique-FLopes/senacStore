import React, { useEffect, useState, useMemo } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  SectionList,
  FlatList,
} from 'react-native';
import InputSearch from '../../components/organisms/InputSearch/InputSearch';
import ProductsService from '../../../Repositories/Products/ProductsService';
import { Product } from '../../../Repositories/Types/Product';
import CardProduct from '../../components/organisms/CardProduct/CardProduct';
import Label from '../../components/atoms/Label';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackList } from '../../components/templates/Navigation/index';

interface Props {
  idProduct?: number;
}

//para tipar os parametros
type HomeNav = NativeStackNavigationProp<RootStackList, 'Home'>;

const HomeScreen: React.FC<Props> = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const navigation = useNavigation<HomeNav>();

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const [prod, cat] = await Promise.all([
          ProductsService.getProducts(),
          ProductsService.getCategories(),
        ]);
        setProducts(prod);
        setCategories(cat);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const sections = useMemo(
    () =>
      categories.map(cat => ({
        title: cat,
        items: products.filter(prod => prod.category === cat),
        data: ['_row'],
      })),
    [categories, products],
  );

  function handleSearch(value: string) {
    setSearch(value);
  }

  function navigationProduct(id: number) {
    console.log(id);
  }

  return (
    <View style={{ gap: 30 }}>
      <InputSearch value={search} handleSearch={value => handleSearch(value)} />
      <SectionList
        sections={sections}
        renderItem={({ section }) => (
          <FlatList
            data={section.items}
            renderItem={({ item }: { item: Product }) => (
              <CardProduct
                product={item}
                handleCardProduct={() => navigationProduct(item.id)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 26, marginVertical: 20 }}
          />
        )}
        renderSectionHeader={({ section }) => (
          <Label text={section.title.toUpperCase()} fontSize={24} />
        )}
        contentContainerStyle={{ paddingBottom: 56 }}
        ListEmptyComponent={<Text>Nenhum produto encontrado.</Text>}
        showsVerticalScrollIndicator={false}
      />
      {loading && <ActivityIndicator />}
    </View>
  );
};

export default HomeScreen;
