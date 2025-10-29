import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsList"
        component={NewsListScreen}
        options={{ title: 'Новости' }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetailScreen}
        options={({ route }) => ({ title: route.params?.title || 'Детали' })}
      />
    </Stack.Navigator>
  );
}
