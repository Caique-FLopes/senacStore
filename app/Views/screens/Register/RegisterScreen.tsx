import React from 'react';
import { View, Text } from 'react-native';

const RegisterScreen: React.FC = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ textAlign: 'center' }}>
        Seja Bem Vindo ao Senac Store, somos a loja perfeita para o seu estilo e
        acessórios!
      </Text>
      <Text>Faça seu registro e venha comprar conosco.</Text>
    </View>
  );
};

export default RegisterScreen;
