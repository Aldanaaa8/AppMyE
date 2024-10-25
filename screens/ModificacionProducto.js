import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, Image } from 'react-native';


const ModificacionProducto = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSave = async () => {
    if (!productName || !price) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    if (isNaN(price)) {
      setErrorMessage('El precio debe ser un número válido.');
      return;
    }

    try {
      const productData = {
        name: productName,
        price: parseFloat(price),
        description,
      };
      await AsyncStorage.setItem('@producto_modificado', JSON.stringify(productData));
      Alert.alert('Éxito', 'Producto modificado correctamente');
      setErrorMessage('');
    } catch (error) {
      console.error('Error al guardar los datos', error);
      Alert.alert('Error', 'No se pudo modificar el producto.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Modificar Producto</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nombre del Producto"
        value={productName}
        onChangeText={setProductName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Precio"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />

      <Button title="Guardar Cambios" onPress={handleSave} color="#4B8E00" />
      
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#89C922', // Fondo verde
  },
  label: {
    fontSize: 30,
    marginBottom: 36,
    textAlign: 'center',
    color: '#4B8E00', 
    fontWeight: 'bold', // Negrita
    textShadowColor: '#000', // Sombra del texto
    textShadowOffset: { width: 1, height: 1 }, // Desplazamiento de la sombra
    textShadowRadius: 2, // Radio de la sombra
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Negro con transparencia
    color: '#FFF', // Texto blanco
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default ModificacionProducto;
