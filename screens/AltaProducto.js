import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from '../configFireBase'; // Importa la configuración de Firebase

// Configuración de Firestore
const db = getFirestore(app);

export default function AltaProducto() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState(''); // Nuevo estado para la categoría

  const handleAltaProducto = async () => {
    // Validar que todos los campos estén completos
    if (!nombre || !precio || !descripcion || !categoria) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    try {
      // Guardar el producto en Firestore
      await addDoc(collection(db, "productos"), {
        nombre,
        precio,
        descripcion,
        categoria
      });
      
      Alert.alert('Éxito', `Producto "${nombre}" agregado con éxito`);

      // Limpiar los campos
      setNombre('');
      setPrecio('');
      setDescripcion('');
      setCategoria('');
    } catch (error) {
      console.error("Error al agregar producto:", error.message);
      Alert.alert("Error", "No se pudo agregar el producto");
    }
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
      <TextInput
        style={styles.input}
        placeholder="Categoría"
        placeholderTextColor="#FFF"
        value={categoria}
        onChangeText={setCategoria}
      />

      <Button title="Agregar Producto" color="#446311" onPress={handleAltaProducto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89C922',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#000',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#446311',
    color: '#FFF',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
});
