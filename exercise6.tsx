import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import TextInput from './components/TextInput';
import Button from './components/Button';
import Title from './components/Title';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const onRegister = () => {
    const onlyNumbers = /^\d+$/;
    if (!onlyNumbers.test(phone)) {
      Alert.alert('Error', 'Phone Number hanya boleh berisi angka!');
      return;
    }
    const formData = {
      name,
      username,
      email,
      address,
      phone,
    };
    console.log('Data Registrasion:', {formData});
    Alert.alert('Sukses', 'Registrasi berhasil');
  };
  return (
    <View style={styles.container}>
      <Title label="Registration" />
      <TextInput
        placeholder="Masukkan Nama Lengkap Anda"
        label="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Masukkan Username Lengkap Anda"
        label="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Masukkan Email Anda"
        label="Email"
        value={email}
        onchangeText={setEmail}
      />
      <TextInput
        placeholder="Masukkan Alamat Anda"
        label="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        placeholder="Masukkan Nomor Telepon Anda"
        label="Phone Number"
        keyboardType="numeric"
        maxLength={13}
        value={phone}
        onChangeText={setPhone}
      />
      <Button label="Register" onPress={onRegister} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
});
