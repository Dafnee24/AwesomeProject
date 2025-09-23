import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './components/Button';
import TextInput from './components/TextInput';

const Registration = () => {
  const [title, setTitle] = useState('Registration');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const onRegister = () => {
    setTitle(`Selamat Datang ${name}`);

    console.log('Berikut data Registrasi');
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone Number:', phone);
  };

  const handlePhoneChange = value => {
    const numericValue = value.replace(/[^0-9]/g, '');
    setPhone(numericValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput
        placeholder="Masukan nama lengkap anda"
        label="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Masukan username anda"
        label="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Masukan email anda"
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Masukan alamat anda"
        label="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        placeholder="Masukan nomor telepon anda"
        label="Phone Number"
        value={phone}
        onChangeText={handlePhoneChange}
        keyboardType="numeric"
      />

      <Button label="Register" onPress={onRegister} />
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});
