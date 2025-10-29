import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Новости"
      screenOptions={({ route }) => ({
        headerTitleAlign: 'center',
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';
          if (route.name === 'Новости') iconName = 'newspaper-outline';
          if (route.name === 'Категории') iconName = 'list-outline';
          if (route.name === 'Профиль') iconName = 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2f95dc',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Новости" component={StackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Категории" component={CategoriesScreen} />
      <Tab.Screen name="Профиль" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
