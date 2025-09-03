import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RowInput } from '../../molecules/RowInput';
import { Button } from '../../molecules/Button';

interface Props {
  value?: string;
  handleSearch: (value: string) => void;
}

const InputSearch: React.FC<Props> = ({ handleSearch }) => {
  return (
    <View style={style.container}>
      <RowInput
        placeholder="Pesquisar"
        handleChange={() => console.log('teste')}
      />
      <Button
        icon={require('../../../../assets/images/search.png')}
        onClick={handleSearch}
      />
    </View>
  );
};

export default InputSearch;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
