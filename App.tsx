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
          <Text style={styles.sectionTitle}>2. Gambar dari Internet</Text>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
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
