import React, { useRef } from 'react'
import { View, ActivityIndicator, Text, TextInput, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IndexExampleContainer } from '@/Containers'
import { Formik } from 'formik'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  const email = useRef(null)
  const password = useRef(null)

  return (
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={IndexExampleContainer} />
    // </Tab.Navigator>
    <View 
      style={{
        display: 'flex',
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
            <Button title='Entrar' />
          </View>
        )}
      </Formik>
    </View>
  )
}

export default MainNavigator
