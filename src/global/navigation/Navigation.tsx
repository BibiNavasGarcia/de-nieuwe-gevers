import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { PasswordScreen } from '../../screens/login/password/PasswordScreen';
import { PortfolioScreen } from '../../screens/portfolio/PortfolioScreen';
import { SearchScreen } from '../../screens/projects/SearchScreen';
import { UsernameScreen } from '../../screens/login/username/UsernameScreen';

import SearchIcon from '../../assets/icons/search.svg';
import SearchIconFocused from '../../assets/icons/search-focused.svg';
import HeartsIcon from '../../assets/icons/hearts.svg';
import HeartsIconFocused from '../../assets/icons/hearts-focused.svg';
import UserIcon from '../../assets/icons/user.svg';
import UserIconFocused from '../../assets/icons/user-focused.svg';
import CommunityIcon from '../../assets/icons/community.svg';
import CommunityIconFocused from '../../assets/icons/community-focused.svg';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Root() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="UsernameScreen" component={UsernameScreen} />
      <AuthStack.Screen name="PasswordScreen" component={PasswordScreen} />
    </Stack.Navigator>
  );
}

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      activeColor="#010036"
      inactiveColor="#7A7A9B"
      barStyle={{ backgroundColor: '#FFFF', paddingTop: 5, height: 65 }}
      labeled
      shifting={false}
    >
      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarLabel: 'Portfolio',
          tabBarIcon: () => <HeartsIcon />
        }}
      />
      <Tab.Screen
        name="Community"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Community',
          tabBarIcon: () => <CommunityIcon />
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Zoeken',
          tabBarIcon: () => <SearchIcon />
        }}
      />
      <Tab.Screen
        name="Profiel"
        component={PortfolioScreen}
        options={{
          tabBarLabel: 'Profiel',
          tabBarIcon: () => <UserIcon />
        }}
      />
    </Tab.Navigator>
  );
}

export function Navigation(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Authorization" component={Root} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
)
}
