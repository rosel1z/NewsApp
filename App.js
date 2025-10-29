
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

import TabNavigator from './navigation/TabNavigator';
import SettingsScreen from './screens/SettingsScreen';
import CustomDrawer from './navigation/CustomDrawer'; 

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Главное меню"
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerTitleAlign: 'center',
          drawerActiveTintColor: '#a4a4a4ff',
          drawerInactiveTintColor: 'gray',
        }}
      >
        <Drawer.Screen
          name="Главное меню"
          component={TabNavigator}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Настройки"
          component={SettingsScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}