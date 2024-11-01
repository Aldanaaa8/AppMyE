<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AltaProducto() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleAltaProducto = () => {
    if (!nombre || !precio || !descripcion) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    Alert.alert('Éxito', `Producto "${nombre}" agregado con éxito`);
    setNombre('');
    setPrecio('');
    setDescripcion('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alta de Productos</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre del producto"
        placeholderTextColor="#FFF"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        placeholderTextColor="#FFF"
        value={precio}
        onChangeText={setPrecio}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        placeholderTextColor="#FFF"
        value={descripcion}
        onChangeText={setDescripcion}
        multiline
      />

      <Button title="Agregar Producto" color="#446311" onPress={handleAltaProducto} />
=======
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AltaProducto() {
  return (
    <View style={styles.container}>
      <Text>Alta de Productos</Text>
      {/* Aquí puedes agregar el formulario o la funcionalidad para dar de alta productos */}
>>>>>>> eea3c5728ceb2d66777330b70aee9c888fdacb18
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#89C922',  // Fondo verde claro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#000',  // Texto negro (similar al título en App.js)
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#446311',  // Fondo verde oscuro para el TextInput
    color: '#FFF',  // Texto blanco en el TextInput
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 15,
=======
    justifyContent: 'center',
    alignItems: 'center',
>>>>>>> eea3c5728ceb2d66777330b70aee9c888fdacb18
  },
});
