import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { name: 'Gaseosas', products: ['Coca-Cola', 'Sprite', 'Fanta', 'Marinaro', 'Secco', 'Talca'] },
  { name: 'Carnes', products: ['Pollo', 'Carne de res', 'Pescado'] },
  { name: 'Lácteos', products: ['Leche', 'Yogur', 'Queso'] },
  { name: 'Limpieza e Higiene', products: ['Jabón', 'Shampoo'] }, 
  { name: 'Golosinas', products: ['Chocolate', 'Gomitas', 'Chicles'] }, 
  { name: 'Galletas', products: ['Oreo', 'Club Social', 'Chocolinas'] }, 
  { name: 'Panadería', products: ['Pan Francés', 'Facturas', 'Baguette'] },
];

export default function Categoria({ route, navigation }) {
  const { category } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra de estado transparente */}
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      {/* Barra de búsqueda con ícono de retroceso */}
      <View style={styles.searchBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={20} color="#555" />
        </TouchableOpacity>
        <View style={styles.searchInputContainer}>
          <TextInput placeholder="Buscar..." style={styles.searchInput} />
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        </View>
      </View>

      {/* ScrollView horizontal de todas las categorías */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalCategories}>
        {categories.map((cat, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton} onPress={() => navigation.navigate('Categoria', { category: cat })}>
            <Text style={styles.categoryText}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Título de la categoría seleccionada */}
      <Text style={styles.title}>{category.name}</Text>

      {/* Productos en 2 columnas */}
      <ScrollView>
        <View style={styles.productGrid}>
          {category.products.map((product, index) => (
            <TouchableOpacity key={index} style={styles.productCard} onPress={() => navigation.navigate('Producto', { product })}>
              <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.productImage} />
              <Text style={styles.productName}>{product}</Text>
              <Text style={styles.productPrice}>$199.99</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: StatusBar.currentHeight + 5, 
  },
  backButton: {
    marginRight: 6, // Separación entre el botón y el cuadro de búsqueda
    padding: 4,
  },
  searchInputContainer: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 5,
  },
  searchIcon: {
    marginLeft: 5, 
  },ntalCategories: {
    marginBottom: 10,
    paddingVertical: 3,
  },
  categoryButton: {
    marginHorizontal: 5,
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: '#89C922',
    borderRadius: 15,
  },
  categoryText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#333',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 5,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444',
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});