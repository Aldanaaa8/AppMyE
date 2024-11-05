import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function Producto({ route }) {
  const { product } = route.params;  // Recibes el producto

  return (
    <View style={styles.container}>
      
      <ScrollView>
        <View style={styles.productDetails}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.productImage}
          />
          <Text style={styles.productName}>{product}</Text>
          <Text style={styles.productPrice}>$199.99</Text>
          <Text style={styles.productDescription}>
            Descripción del producto aquí...
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  productDetails: {
    alignItems: 'center',
  },
  productImage: {
    width: 180,
    height: 180,
    borderRadius:10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 18,
    color: '#888',
    marginTop: 5,
  },
  productDescription: {
    marginTop: 10,
    textAlign: 'center',
  },
});