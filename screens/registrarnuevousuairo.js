import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';


export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completa los siguientes campos...</Text>

      <TextInput
        placeholder='Nombre'
        placeholderTextColor='#FFF'
        style={styles.TextInput}
      />
      <TextInput
        placeholder='Apellido'
        placeholderTextColor='#FFF'
        style={styles.TextInput}
      />
      <TextInput
        placeholder='Correo electrónico'
        placeholderTextColor='#FFF'
        style={styles.TextInput}
      />
      <TextInput
        placeholder='Contraseña'
        placeholderTextColor='#FFF'
        style={styles.TextInput}
        secureTextEntry={true}
      />

      <Button title="Registrar" onPress={() => { /* Lógica de registro */ }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89C922',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    color: '#000',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  TextInput: {
    backgroundColor: '#446311',
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 16,
    color: '#FFF',
  },
  
});
