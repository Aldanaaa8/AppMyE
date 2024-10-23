import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BajaProducto() {
  return (
    <View style={styles.container}>
      <Text>Baja de Productos</Text>
      {/* Aquí puedes agregar la funcionalidad para dar de baja productos */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
