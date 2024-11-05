import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import app from '../configFireBase';

const db = getFirestore(app);

const BajaProducto = () => {
  const [productos, setProductos] = useState([]);

  // Obtener productos desde Firebase al montar el componente
  useEffect(() => {
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

  // Función para eliminar un producto
  const handleDeleteProduct = async (productId) => {
    try {
      await deleteDoc(doc(db, 'productos', productId));
      Alert.alert('Producto eliminado', 'El producto ha sido eliminado correctamente.');

      // Actualizar la lista de productos después de la eliminación
      const updatedProductos = productos.filter(producto => producto.id !== productId);
      setProductos(updatedProductos);
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      Alert.alert('Error', 'No se pudo eliminar el producto.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eliminar Producto</Text>
      
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productText}>{item.nombre}</Text>
            <Button
              title="Eliminar"
              onPress={() => handleDeleteProduct(item.id)}
              color="red"
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#89C922',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: '#4B8E00',
    fontWeight: 'bold',
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#446311',
    marginBottom: 10,
    borderRadius: 10,
  },
  productText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default BajaProducto;
