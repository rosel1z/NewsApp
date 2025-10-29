import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Профиль</Text>

      <View style={styles.profileBlock}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150' }}
          style={styles.avatar}
        />
        <View style={styles.info}>
          <Text style={styles.name}>Вася Петькин</Text>
          <Text style={styles.email}>vasya@example.com</Text>
        </View>
      </View>

      <View style={styles.details}>
        <Text style={styles.label}>Подписка:</Text>
        <Text style={styles.value}>Premium</Text>

        <Text style={styles.label}>Любимая категория:</Text>
        <Text style={styles.value}>Технологии</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Редактировать профиль</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f8f9fa' },
  h1: { fontSize: 22, fontWeight: '700', marginBottom: 16 },
  profileBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  avatar: { width: 80, height: 80, borderRadius: 40, marginRight: 16 },
  info: { flex: 1 },
  name: { fontSize: 18, fontWeight: '600' },
  email: { color: '#666', marginTop: 4 },
  details: { marginTop: 20 },
  label: { color: '#888', fontSize: 14, marginTop: 8 },
  value: { fontSize: 16, fontWeight: '500', color: '#333' },
  button: {
    marginTop: 30,
    backgroundColor: '#2f95dc',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});