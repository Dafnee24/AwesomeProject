import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* untuk Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Biodata</Text>
        </View>

        {/* 1. Gambar dari Local Resource */}
        <View style={styles.imageContainer}>
          <Image
            source={require('./assets/images/local-image.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.caption}>Nama: Julia dafnee Pangaila</Text>
          <Text style={styles.caption}>Umur: 19 Tahun</Text>
          <Text style={styles.caption}>Fakultas: Ilmu Komputer</Text>
          <Text style={styles.caption}>Jurusan: Sistem Informasi</Text>
          <Text style={styles.caption}>Asal: Poigar Bolmong</Text>
          <Text style={styles.caption}>Hobi: Memasak</Text>
          <Text style={styles.caption}>Universitas: Universitas Klabat</Text>
          <Text style={styles.caption}>No.Hp: 088213637928</Text>
          <Text style={styles.caption}></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#97f0e6ff',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#349fe6ff',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffffff',
  },
  imageContainer: {
    margin: 16,
    marginBottom: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  caption: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default App;
