import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import ButtonGradient from './ButtonGradient';
import Opciones from './screens/Opciones';
import AltaProducto from './screens/AltaProducto';
import BajaProducto from './screens/BajaProducto';
import ModificacionProducto from './screens/ModificacionProducto';
import RegisterScreen from './screens/registrarnuevousuario';
import Inicio from './screens/Inicio';
import PerfilAdministrador from './screens/PerfilAdministrador';
import Usuariodiosalta from './screens/Usuariodiosalta'; // Importa la pantalla de alta para usuario dios
import Categoria from './screens/Categoria'
import Producto from './screens/Producto'
// Importaciones de Firebase desde configFireBase.js
import app from './configFireBase';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Configuración de Firestore y Authentication
const db = getFirestore(app);
const auth = getAuth(app);

// Crear el Stack
const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDios, setEmailDios] = useState('');
  const [passwordDios, setPasswordDios] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Verificar si el usuario es dios en Firebase
      const q = query(collection(db, "Usuariodios"), where("email", "==", user.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Usuario dios encontrado, redirige a la pantalla de perfil
        navigation.navigate('PerfilAdministrador');
      } else {
        // Si no es dios, redirige a la pantalla de inicio
        navigation.navigate('Inicio');
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      Alert.alert("Error al iniciar sesión", error.message);
    }
  };

  const handleRegistrarDios = () => {
    // Lógica para registrar al usuario Dios
    navigation.navigate('PerfilAdministrador'); // Redirigir después de registrar
  };

  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>M&E</Text>
      </View>

      <TextInput
        placeholder="Ingresa tu E-mail"
        placeholderTextColor="#FFF"
        style={styles.TextInput}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Ingresa tu contraseña"
        placeholderTextColor="#FFF"
        style={styles.TextInput}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.forgotPassword}>¿Has olvidado tu contraseña?</Text>

      <ButtonGradient onPress={handleLogin} />

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.RegisterText}>¿Deseas crear una cuenta nueva?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Usuariodiosalta')}>
        <Text style={styles.RegisterText}>¿Deseas crear una cuenta Administrador?</Text>
      </TouchableOpacity>

      {/* Inputs para el usuario Dios */}
      <TextInput
        placeholder="Ingresa tu E-mail Dios"
        placeholderTextColor="#FFF"
        style={styles.TextInput}
        value={emailDios}
        onChangeText={setEmailDios}
      />
      <TextInput
        placeholder="Ingresa tu contraseña Dios"
        placeholderTextColor="#FFF"
        style={styles.TextInput}
        secureTextEntry={true}
        value={passwordDios}
        onChangeText={setPasswordDios}
      />

      {/* Botón Registrar Dios */}
      <TouchableOpacity style={styles.buttonDios} onPress={handleRegistrarDios}>
        <Text style={styles.buttonText}>Registrar Dios</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Crear Cuenta' }}
        />
        <Stack.Screen
          name="Usuariodiosalta"
          component={Usuariodiosalta}
          options={{ title: 'Registrar Usuario Dios' }}
        />
        <Stack.Screen
          name="Opciones"
          component={Opciones}
          options={{ title: 'Opciones' }}
        />
        <Stack.Screen
          name="AltaProducto"
          component={AltaProducto}
          options={{ title: 'Alta de Producto' }}
        />
        <Stack.Screen
          name="BajaProducto"
          component={BajaProducto}
          options={{ title: 'Baja de Producto' }}
        />
        <Stack.Screen
          name="ModificacionProducto"
          component={ModificacionProducto}
          options={{ title: 'Modificación de Producto' }}
        />
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ title: 'Inicio' }}
        />


        <Stack.Screen
          name="Categoria"
          component={Categoria}
          options={{ title: 'Categoría' }}
        />
        <Stack.Screen
          name="Producto"
          component={Producto}
          options={{ title: 'Producto' }}
        />

        <Stack.Screen
          name="PerfilAdministrador"
          component={PerfilAdministrador}
          options={{ title: 'Perfil del Administrador' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
  tituloContainer: {
    marginBottom: 60,
  },
  titulo: {
    fontSize: 50,
    color: '#000',
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
  forgotPassword: {
    fontSize: 14,
    color: '#FFF',
    marginTop: 10,
  },
  RegisterText: {
    fontSize: 14,
    color: '#FFF',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  buttonDios: {
    backgroundColor: '#32CD32', // Color verde
    borderRadius: 16,
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});
