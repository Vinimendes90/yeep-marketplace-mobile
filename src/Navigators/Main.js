import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { HomeNavigator } from '@/Navigators/Home'
import { LoginContainer } from '@/Containers'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = () => {
  HomeNavigator = require('@/Navigators/Home').default

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
          headerShown: false
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginContainer}
        options={{
          title: 'Entrar',
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          // animationTypeForReplace: state.isSignout ? 'pop' : 'push',
        }}
      />
      <Stack.Screen
        name="Initial"
        component={HomeNavigator}
      />
    </Stack.Navigator>
    // <LoginContainer />
  )
}

export default MainNavigator
