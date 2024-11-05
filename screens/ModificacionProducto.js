import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, FlatList, TouchableOpacity } from 'react-native';
import { getFirestore, collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import app from '../configFireBase';

const db = getFirestore(app);

const ModificacionProducto = () => {
  const [productos, setProductos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [categoria, setCategoria] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Obtener productos desde Firebase al montar el componente
    const fetchProductos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'productos'));
        const productosList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(productosList);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProductos();
  }, []);

  const handleSelectProduct = (producto) => {
    setSelectedProduct(producto);
    setProductName(producto.nombre);
    setPrice(producto.precio.toString());
    setDescription(producto.descripcion);
    setCategoria(producto.categoria);
  };

  const handleSave = async () => {
    if (!productName || !price || !description || !categoria) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    if (isNaN(price)) {
      setErrorMessage('El precio debe ser un número válido.');
      return;
    }

    try {
      await updateDoc(doc(db, 'productos', selectedProduct.id), {
        nombre: productName,
        precio: parseFloat(price),
        descripcion: description,
        categoria: categoria,
      });

      Alert.alert('Éxito', 'Producto modificado correctamente');
      setErrorMessage('');

      // Actualizar la lista de productos después de la modificación
      const updatedProductos = productos.map((producto) =>
        producto.id === selectedProduct.id
          ? { ...producto, nombre: productName, precio: parseFloat(price), descripcion: description, categoria: categoria }
          : producto
      );
      setProductos(updatedProductos);
      setSelectedProduct(null); // Deseleccionar el producto después de la modificación
    } catch (error) {
      console.error('Error al guardar los datos', error);
      Alert.alert('Error', 'No se pudo modificar el producto.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Modificar Producto</Text>

      {selectedProduct ? (
        <>
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
          <TextInput
            style={styles.input}
            placeholder="Categoría"
            value={categoria}
            onChangeText={setCategoria}
          />

          <Button title="Guardar Cambios" onPress={handleSave} color="#000" />
          {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        </>
      ) : (
        <FlatList
          data={productos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectProduct(item)}>
              <Text style={styles.productItem}>{item.nombre}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#89C922',
  },
  label: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: '#4B8E00',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#FFF',
  },
  productItem: {
    padding: 15,
    backgroundColor: '#446311',
    color: '#FFF',
    marginBottom: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default ModificacionProducto;
