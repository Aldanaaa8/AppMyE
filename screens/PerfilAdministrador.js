import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PerfilAdministrador({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil del Administrador</Text>
      <Button
        title="Opciones"
        onPress={() => navigation.navigate('Opciones')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
