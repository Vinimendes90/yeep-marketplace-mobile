import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HOME SCREEN</Text>
      {/* ROTA PARA A TELA DE STORE, PARA TESTAR CONEXÃO ## REMOVER */}
      <TouchableOpacity onPress={() => navigation.navigate('StoreScreen')}>
        <Text>Ir para store</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;