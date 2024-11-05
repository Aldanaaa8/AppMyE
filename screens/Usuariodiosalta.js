import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from '../configFireBase';

const db = getFirestore(app);

export default function Usuariodiosalta({ navigation }) {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterDios = async () => {
    if (!id || !nombre || !email || !password) {
      Alert.alert("Todos los campos son obligatorios");
      return;
    }

    try {
      await addDoc(collection(db, 'Usuariodios'), {
        id,
        nombre,
        email,
        password,
      });
      Alert.alert("Usuario 'dios' registrado con éxito");
      navigation.navigate('PerfilAdministrador');
    } catch (error) {
      console.error("Error al registrar usuario 'dios':", error);
      Alert.alert("Error al registrar usuario 'dios'", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Usuario Dios</Text>
      <TextInput
        placeholder="ID proporcionado por la empresa"
        style={styles.input}
        value={id}
        onChangeText={setId}
      />
      <TextInput
        placeholder="Nombre"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Registrar Usuario Dios" onPress={handleRegisterDios} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
});
