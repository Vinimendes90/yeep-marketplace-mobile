import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useDispatch, useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginContainer, StoreScreen } from '@/Containers'

const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = () => {
  const user = useSelector((state) => state.user.item)
  const HomeNavigator = require('@/Navigators/Home').default

  return (
    <Stack.Navigator
      initialRouteName={user && user.token ? 'Initial' : 'Login'}
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
      <Stack.Screen
        name="StoreScreen"
        component={StoreScreen}
      />
    </Stack.Navigator>
    // <LoginContainer />
  )
}

export default MainNavigator
