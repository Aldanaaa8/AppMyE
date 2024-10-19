import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Opciones({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Botón para Alta de Productos */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AltaProducto')} // Redirige a la pantalla de alta
      >
        <Text style={styles.buttonText}>Subir Productos</Text>
      </TouchableOpacity>

      {/* Botón para Baja de Productos */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BajaProducto')} // Redirige a la pantalla de baja
      >
        <Text style={styles.buttonText}>Eliminar Productos</Text>
      </TouchableOpacity>

      {/* Botón para Modificación de Productos */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ModificacionProducto')} // Redirige a la pantalla de modificación
      >
        <Text style={styles.buttonText}>Editar Productos</Text>
      </TouchableOpacity>

      {/* Botón para Ver Productos */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('VerProducto')} 
      >
        <Text style={styles.buttonText}>Ver Productos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#89C922',
  },
  button: {
    backgroundColor: '#000', // Color de fondo del botón (negro)
    padding: 20,
    marginBottom: 15, // Espacio entre botones
    width: '70%', // Anchura del botón
    borderRadius: 40, // Bordes redondeados para mejorar la apariencia
    alignItems: 'center', // Centrar el texto dentro del botón
  },
  buttonText: {
    color: '#fff', // Color del texto del botón (blanco)
    fontSize: 16, // Tamaño de la fuente
  },
});


