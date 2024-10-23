import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import ButtonGradient from './ButtonGradient';
import Opciones from './screens/option'; 
import AltaProducto from './screens/AltaProducto';
import BajaProducto from './screens/BajaProducto';
import ModificacionProducto from './screens/ModificacionProducto';
import RegisterScreen from './screens/registrarnuevousuairo';
import { TouchableOpacity } from 'react-native';

// Crear el Stack
const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>M&E</Text>
      </View>
      <TextInput
        placeholder="Ingresa tu E-mail"
        placeholderTextColor="#FFF"
        style={styles.TextInput}
      />
      <TextInput
        placeholder="Ingresa tu contraseña"
        placeholderTextColor="#FFF"
        style={styles.TextInput}
        secureTextEntry={true}
      />
      <Text style={styles.forgotPassword}> ¿Has olvidado tu contraseña? </Text>
      <ButtonGradient />

      {/* Enlace para crear una nueva cuenta */}
    
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.RegisterText}> ¿Deseas crear una cuenta nueva? </Text>
      </TouchableOpacity>

      {/* Botón para ir a la pantalla de Opciones */}
      <Button
        title="Ir a Opciones"
        onPress={() => navigation.navigate('Opciones')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Pantalla principal, sin mostrar el header */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}  // Esto desactiva el título "Home"
        />

         {/* Pantalla de registro */}
         <Stack.Screen
          name="Register"
          component={RegisterScreen}  // Enlaza a la pantalla de registro
          options={{ title: 'Crear Cuenta' }}  // Opcional: título personalizado
        />
        {/* Otras pantallas */}
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
    justifyContent: 'center',  // Asegura que el contenido esté centrado verticalmente
    padding: 20,  // Agregar algo de padding para evitar que los elementos se peguen a los bordes
  },
  tituloContainer: {
    marginBottom: 60,  // Ajusta el margen inferior para que el título no empuje los otros elementos muy abajo
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
    marginTop: 20,  // Reduce el margen para que no haya mucho espacio entre los elementos
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
    marginTop: 10,  // Asegúrate de que haya espacio adecuado para este texto
    textDecorationLine: 'underline',  // Esto hace que parezca un enlace
  },
});
