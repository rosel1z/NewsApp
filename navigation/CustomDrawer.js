import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Image } from 'react-native';

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150' }}
          style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }}
        />
        <Text style={{ fontWeight: '700' }}>Вася Петькин</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}