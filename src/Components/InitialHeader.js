import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '@/Theme'

// import { Container } from './styles';

const InitialHeader = () => {
  return (
      <View style={{
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white
      }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.primary }}>Yeep</Text>
      </View>
  );
}

export default InitialHeader;