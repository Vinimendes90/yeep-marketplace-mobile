import React, { useRef, useState } from 'react';
import { View, ActivityIndicator, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import SignIn from '@/Store/User/SignIn'
import { Colors } from '@/Theme';

// import { Container } from './styles';

const LoginScreen = ({ navigation }) => {
    const { t } = useTranslation()
    
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user.item)
    const signInUserLoading = useSelector(
        (state) => state.user.signIn.loading,
    )
    const signInUserError = useSelector((state) => state.user.signIn.error)

    // const [userId, setUserId] = useState('1')

    const signIn = async (values) => {
        try {
            const userReponse = await dispatch(SignIn.action(values))
            console.log(Object.keys(user))
            console.log({user})
            console.log({signInUserError})

            if(!signInUserError && Object.keys(user).length > 0) {
                redirectAfterSignIn()
            }
        } catch (error) {
            // Exibir erro em um alerta
            console.log({error});
        }
    }

    const redirectAfterSignIn = () => {

        // if(data.user.[0].new_user == true) {
        //   return navigation.navigate('SuccessRegisterScreen')
        // }
    
        navigation.navigate('Initial')
      }

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
            onSubmit={values => signIn(values)}
            validationSchema={
              Yup.object().shape({
                email: Yup
                  .string()
                  .email(t('auth.emailNotValid'))
                  .required(t('auth.emailRequired')),
                password: Yup
                  .string()
                  .required(t('auth.passwordRequired'))
                  .min(6, t('auth.passwordMin'))
              })
            }
        >
            {({
                values,
                handleChange,
                handleSubmit,
                errors,
                setFieldTouched,
                touched
            }) => (
            <View
                style={{
                    width: '100%'
                }}
            >
                {/* EMAIL */}
                <Text>Email</Text>
                <TextInput
                ref={email}
                value={values.email}
                onBlur={() => setFieldTouched('email')}
                onChangeText={handleChange('email')}
                autoCapitalize={'none'}
                style={{
                    borderWidth: 1,
                    marginTop: 10,
                    marginBottom: 5
                }}
                />
                {touched.email && errors.email ?
                    <Text style={{ marginBottom: 15, fontSize: 12, color: Colors.lightRed }}>
                        {errors.email}
                    </Text>
                : null }

                {/* PASSWORD */}
                <Text>Senha</Text>
                <TextInput
                ref={password}
                value={values.password}
                onBlur={() => setFieldTouched('password')}
                onChangeText={handleChange('password')}
                style={{
                    borderWidth: 1,
                    marginTop: 10,
                    marginBottom: 5
                }}
                />
                {touched.password && errors.password ?
                    <Text style={{ marginBottom: 15, fontSize: 12, color: Colors.lightRed }}>
                        {errors.password}
                    </Text>
                : null }

                <TouchableOpacity
                    title='Entrar'
                    onPress={handleSubmit}
                    style={{ backgroundColor: 'blue', height: 50, alignItems: 'center', justifyContent: 'center' }}
                >
                    {!signInUserLoading ?(
                        <Text style={{ color: 'white' }}>ENTRAR</Text>
                    )
                    : (
                        <ActivityIndicator size={'small'} color={'#fff'} />
                    )}
                </TouchableOpacity>
            </View>
            )}
        </Formik>
        </View>
    );
}

export default LoginScreen;