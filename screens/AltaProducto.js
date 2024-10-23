import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AltaProducto() {
  return (
    <View style={styles.container}>
      <Text>Alta de Productos</Text>
      {/* Aquí puedes agregar el formulario o la funcionalidad para dar de alta productos */}
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
