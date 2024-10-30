import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const BajaProducto = () => {
  const [productoID, setProductoID] = useState('');  // Estado para manejar el ID del producto

  const handleDelete = () => {
    // Lógica para eliminar el producto
    console.log(`Producto con ID: ${productoID} eliminado`);
    // Implementar función para interactuar con backend o lista de productos
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eliminar Producto</Text>
      <TextInput
        style={styles.input}
        placeholder="ID del Producto"
        value={productoID}
        onChangeText={text => setProductoID(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Eliminar" onPress={handleDelete} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center', // Centrar elementos horizontalmente
    padding: 16,
    backgroundColor: '#89C922',  // Color de fondo verde claro
  },
  title: {
    fontSize: 30,  // Aumentar tamaño del título
    marginBottom: 16,
    textAlign: 'center',  // Centrar el texto
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,  // Margen inferior para separar el input del botón
    paddingLeft: 8,
    width: '50%',  // Ajustar el ancho del campo de ID
  },
  buttonContainer: {
    width: '50%',  // Limitar el ancho del botón
    marginTop: 10,  // Margen superior para el botón
    backgroundColor: 'black',  // Fondo negro del botón
  },
});

export default BajaProducto;
