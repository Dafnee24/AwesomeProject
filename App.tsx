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
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>React Native Image Display</Text>
          <Text style={styles.subtitle}>Nama: Dafnee Pangaila</Text>
          <Text style={styles.subtitle}>
            Menampilkan 3 Gambar dari Sumber Berbeda
          </Text>
        </View>

        {/* 1. Gambar dari Local Resource */}
        <View style={styles.imageContainer}>
          <Text style={styles.sectionTitle}>1. Gambar dari Local Resource</Text>
          <Image
            source={require('./assets/images/local-image.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.caption}>Gambar dari folder lokal project</Text>
        </View>

        {/* 2. Gambar dari Network */}
        <View style={styles.imageContainer}>
          <Text style={styles.sectionTitle}>
            2. Gambar dari Network (Internet)
          </Text>
          <Image
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.caption}>Gambar dari internet</Text>
        </View>

        {/* 3. Gambar dari Base64 */}
        <View style={styles.imageContainer}>
          <Text style={styles.sectionTitle}>3. Gambar dari Base64</Text>
          <Image
            source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
            style={[styles.image, {height: 100}]}
            resizeMode="contain"
          />
          <Text style={styles.caption}>Gambar dari encoding base64</Text>
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
    color: '#e6e6e6',
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
