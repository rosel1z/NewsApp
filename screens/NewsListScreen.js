import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', title: 'Apple представила что-то новое', category: 'Технологии' },
  { id: '2', title: 'Рынки растут', category: 'Экономика' },
  { id: '3', title: 'Футбол: драматичная развязка', category: 'Спорт' },
];

export default function NewsListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('NewsDetail', { id: item.id, title: item.title })}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.meta}>{item.category}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(it) => it.id}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { paddingVertical: 12 },
  title: { fontSize: 16, fontWeight: '600' },
  meta: { color: '#666', marginTop: 4 },
  sep: { height: 1, backgroundColor: '#eee' },
});
