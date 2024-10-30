import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import ButtonGradient from './ButtonGradient';
import Opciones from './screens/option'; 
import Inicio from './screens/Inicio';
import Categoria from './screens/Categoria';
import Producto from './screens/Producto';
import AltaProducto from './screens/AltaProducto';
import BajaProducto from './screens/BajaProducto';
import ModificacionProducto from './screens/ModificacionProducto';

// Crear el Stack
const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {  // Asegúrate de recibir la prop navigation
  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>M&E</Text>
      </View>
      <TextInput
        placeholder="ingresa tu E-mail"
        placeholderTextColor="#FFF"
        style={styles.TextInput}
      />
      <TextInput
        placeholder="ingresa tu contraseña"
        placeholderTextColor="#FFF"
        style={styles.TextInput}
        secureTextEntry={true}
      />
      <Text style={styles.forgotPassword}> ¿Haz olvidado tu contraseña? </Text>
      <ButtonGradient />
      <Text style={styles.forgotPassword}> ¿Deseas crear una cuenta nueva? </Text>

      {/* Botón para ir a la pantalla de Opciones */}
      <Button
        title="Ir a Opciones"
        onPress={() => navigation.navigate('Opciones')}  // Ahora navigation está disponible
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        {/* oculta "Inicio" */}
        <Stack.Screen name="Inicio" component={Inicio} options={{headerShown: false}}/> 
        <Stack.Screen name="Categoria" component={Categoria} options={{headerShown: false}}/>
        <Stack.Screen name="Producto" component={Producto} />
        {/* Pantalla opciones */}
        <Stack.Screen name="Opciones" component={Opciones} />
        <Stack.Screen name="AltaProducto" component={AltaProducto} />
        <Stack.Screen name="BajaProducto" component={BajaProducto} />
        <Stack.Screen name="ModificacionProducto" component={ModificacionProducto} />
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
  },
  tituloContainer: {
    marginBottom: 90,
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
    marginTop: 90,
    borderRadius: 16,
    color: '#FFF',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#FFF',
    marginTop: 20,
  },
});
