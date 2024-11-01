import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ModificacionProducto() {
  return (
    <View style={styles.container}>
      <Text>Modificación de Productos</Text>
      {/* Aquí puedes agregar el formulario o la funcionalidad para modificar productos */}
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
