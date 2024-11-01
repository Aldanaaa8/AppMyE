import React from 'react';
import { 
  StyleSheet, Text, View, TextInput, Image, 
  ScrollView, Dimensions, TouchableOpacity, SafeAreaView, StatusBar 
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const categories = [
  { name: 'Gaseosas', products: ['Coca-Cola', 'Sprite', 'Fanta'] },
  { name: 'Carnes', products: ['Pollo', 'Carne de res', 'Pescado'] },
  { name: 'Lácteos', products: ['Leche', 'Yogur', 'Queso'] },
  { name: 'Limpieza e Higiene', products: ['Detergente', 'Jabón', 'Shampoo'] },
  { name: 'Golosinas', products: ['Chocolate', 'Gomitas', 'Chicles'] },
  { name: 'Galletas', products: ['Oreo', 'Club Social', 'Chocolinas'] },
  { name: 'Panadería', products: ['Pan Francés', 'Facturas', 'Baguette'] },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#89C922" />

      {/* Barra superior */}
      <View style={styles.topBar}>
        <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.logo} />
        <TextInput placeholder="Buscar..." style={styles.searchInput} />
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Contenido desplazable (carrusel + productos) */}
      <ScrollView style={styles.scrollContent}>
        {/* Carrusel de ofertas */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
          <Image source={require('./assets/Ofertas/o1.png')} style={styles.carouselImage} />
          <Image source={require('./assets/Ofertas/o1.png')} style={styles.carouselImage} />
          <Image source={require('./assets/Ofertas/o1.png')} style={styles.carouselImage} />
        </ScrollView>

        {/* Sección de categorías */}
        {categories.map((category, index) => (
          <View key={index} style={styles.categorySection}>
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryTitle}>{category.name}</Text>
              <TouchableOpacity>
                <Text style={styles.showMore}>Mostrar más...</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {category.products.map((product, idx) => (
                <View key={idx} style={styles.productCard}>
                  <Image
                    source={{ uri: 'https://via.placeholder.com/80' }}
                    style={styles.productImage}
                  />
                  <Text style={styles.productName}>{product}</Text>
                  <Text style={styles.productPrice}>$19.99</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  topBar: {
    backgroundColor: '#89C922',
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 40,
    height: 40,
  },
  searchInput: {
    backgroundColor: '#FFF',
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    height: 40,
  },
  menuButton: {
    padding: 5,
    paddingTop:0,
    borderRadius:10,
    justifyContent: 'center',
    backgroundColor:'#E0E0E0',
  },
  menuText: {
    fontSize: 25,
  },
  scrollContent: {
    flex: 1,
  },
  carousel: {
    paddingVertical: 10,
    backgroundColor: '#E0E0E0',
  },
  carouselImage: {
    width: screenWidth - 20,
    height: 180,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  categorySection: {
    marginVertical: 10,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  showMore: {
    fontSize: 14,
    color: '#007BFF',
  },
  productCard: {
    width: screenWidth / 3,
    marginHorizontal: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});