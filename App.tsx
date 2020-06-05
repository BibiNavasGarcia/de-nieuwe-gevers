import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {color } from './src/shared/theme/theme';

import { SearchScreen } from './src/screens/projects/SearchScreen';
import { UsernameScreen } from './src/screens/login/username/UsernameScreen';
import { PasswordScreen } from './src/screens/login/password/PasswordScreen';

import SearchIcon from './src/assets/icons/search.svg';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  function createAuthStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="UsernameScreen" component={UsernameScreen} />
        <AuthStack.Screen name="PasswordScreen" component={PasswordScreen} />
      </Stack.Navigator>
    );
  }

  function createBottomTabs() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#010036',
          inactiveTintColor: '#7A7A9B'
        }}
      >
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Zoeken',
            tabBarIcon: ({ color, size }) => (
              <SearchIcon name="search" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen name="Portfolio" component={SearchScreen} />
        <Tab.Screen name="Community" component={SearchScreen} />
        <Tab.Screen name="Profiel" component={SearchScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Authorization" component={createAuthStack} /> */}
        <Stack.Screen name="Home" component={createBottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
