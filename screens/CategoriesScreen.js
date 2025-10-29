import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const CATEGORIES = ['Технологии', 'Экономика', 'Спорт', 'Политика', 'Развлечения'];

export default function CategoriesScreen({ navigation }) {
  const onPick = (category) => {
    navigation.navigate('Новости', {
      screen: 'NewsList',
      params: { category },
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onPick(item)}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Категории</Text>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(c) => c}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  h1: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
  item: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#f4f6f8',
  },
  itemText: { fontSize: 16, fontWeight: '600' },
  sep: { height: 8 },
});