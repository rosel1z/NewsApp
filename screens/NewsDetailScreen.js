import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button, ScrollView } from 'react-native';

const DATA = [
  { id: '1', title: 'Apple представила что-то новое', category: 'Технологии' },
  { id: '2', title: 'Рынки растут', category: 'Экономика' },
  { id: '3', title: 'Футбол: драматичная развязка', category: 'Спорт' },
  { id: '4', title: 'Громкая премьера', category: 'Развлечения' },
  { id: '5', title: 'Выборы близко', category: 'Политика' },
];

const CATEGORIES = ['Все', 'Технологии', 'Экономика', 'Спорт', 'Развлечения', 'Политика'];

export default function NewsListScreen({ navigation }) {
  const [category, setCategory] = useState('Все');


  useEffect(() => {
    navigation.setOptions({
      title: category === 'Все' ? 'Новости' : `Новости: ${category}`,
    });
  }, [category, navigation]);

  const filteredList = useMemo(() => {
    if (category === 'Все') return DATA;
    return DATA.filter((x) => x.category === category);
  }, [category]);

  const handleSelectCategory = useCallback((cat) => {
    setCategory(cat);
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('NewsDetail', { id: item.id, title: item.title })}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.meta}>{item.category}</Text>
      </TouchableOpacity>
    ),
    [navigation]
  );

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryBar}
      >
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryButton,
              category === cat && styles.categoryButtonActive,
            ]}
            onPress={() => handleSelectCategory(cat)}
          >
            <Text
              style={[
                styles.categoryText,
                category === cat && styles.categoryTextActive,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filteredList}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        ListEmptyComponent={<Text>Нет новостей в этой категории</Text>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  categoryBar: { marginBottom: 12 },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
  },
  categoryButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  categoryText: { color: '#333', fontWeight: '500' },
  categoryTextActive: { color: '#fff' },
  item: { paddingVertical: 12 },
  title: { fontSize: 16, fontWeight: '600', color: '#000' },
  meta: { color: '#666', marginTop: 4 },
  sep: { height: 1, backgroundColor: '#eee' },
});