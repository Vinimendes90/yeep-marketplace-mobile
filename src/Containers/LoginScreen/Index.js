import React, { useRef } from 'react';
import { View, ActivityIndicator, Text, TextInput, Button, TouchableOpacity } from 'react-native'

import { Formik } from 'formik'

// import { Container } from './styles';

const LoginScreen = ({ navigation }) => {
    const email = useRef(null)
    const password = useRef(null)

    return (
        <View 
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 40,
                width: '100%',
                height: '100%'
            }}
        >
        <Formik
            initialValues={{
            email: '',
            password: ''
            }}
        >
            {({values, handleChange}) => (
            <View
                style={{
                width: '100%'
                }}
            >
                <Text>Email</Text>
                <TextInput
                ref={email}
                value={values.email}
                onChangeText={handleChange('email')}
                style={{
                    borderWidth: 1,
                    marginTop: 10,
                    marginBottom: 10
                }}
                />
                <Text>Senha</Text>
                <TextInput
                ref={password}
                value={values.password}
                onChangeText={handleChange('password')}
                style={{
                    borderWidth: 1,
                    marginTop: 10,
                    marginBottom: 10
                }}
                />
                <TouchableOpacity
                    title='Entrar'
                    onPress={() => navigation.navigate('Initial')}
                    style={{ backgroundColor: 'blue', height: 50, alignItems: 'center', justifyContent: 'center' }}
                >
                    <Text style={{ color: 'white' }}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
            )}
        </Formik>
        </View>
    );
}

export default LoginScreen;