import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import appFirebase from '../configFireBase'; // Asegúrate de que la ruta sea correcta
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigation = useNavigation();

  const saveAdministrador = async () => {
    const auth = getAuth(appFirebase); // Correcto: usa appFirebase
    const db = getFirestore(appFirebase); // Correcto: usa appFirebase
    try {
      // Registro en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, correo, contrasena);
      const user = userCredential.user;

      // Guarda los datos adicionales en Firestore
      await addDoc(collection(db, 'Usuarioadministrador'), {
        uid: user.uid,
        nombre: nombre,
        apellido: apellido,
        correo: correo,
      });

      Alert.alert('Usuario registrado con éxito');
      navigation.navigate('Inicio'); // Asegúrate de que el nombre de la pantalla sea correcto
    } catch (error) {
      console.error('Error al registrar usuario: ', error);
      Alert.alert('Error al registrar usuario', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completa los siguientes campos...</Text>

      <TextInput
        placeholder='Nombre'
        placeholderTextColor='#FFF'
        style={styles.TextInput}
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        placeholder='Apellido'
        placeholderTextColor='#FFF'
        style={styles.TextInput}
        value={apellido}
        onChangeText={setApellido}
      />
      <TextInput
        placeholder='Correo electrónico'
        placeholderTextColor='#FFF'
        style={styles.TextInput}
        value={correo}
        onChangeText={setCorreo}
      />
      <TextInput
        placeholder='Contraseña'
        placeholderTextColor='#FFF'
        style={styles.TextInput}
        secureTextEntry={true}
        value={contrasena}
        onChangeText={setContrasena}
      />

      <Button title="Registrar" onPress={saveAdministrador} />
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
