import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

// import { Container } from './styles';

const HomeScreen = ({ navigation }) => {
  
  const user = useSelector((state) => state.user.item)
  const signIn = useSelector((state) => state.user.signIn)

  console.log({user})
  console.log({signIn})
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