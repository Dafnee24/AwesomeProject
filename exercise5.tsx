import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './components/Button';
import TextInput from './components/TextInput';

const Login = () => {
  // let title = 'Welcome !!!'; //Deklarasi variabel biasa
  const [title, setTitle] = useState('Welcome'); //Varible state
  const [username, setUsername] = useState('');
  const onSignIn = () => {
    // title = 'Selamat Datang';
    setTitle(`Selamat Datang ${username}`);
    console.log(title);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder="Masukan username anda"
        label="Username"
        onChangeText={event => setUsername(event)}
      />
      <TextInput
        placeholder="Masukan password anda"
        label="Password"
        secureTextEntry={true}
      />
      <Button label="Sign In" onPress={onSignIn} />
      <Button label="Sign In Google" color="red" colorText="#ffffff" />
      <Button label="Sign In Facebook" color="blue" colorText="#ffffff" />
      <Button label="Sign In Apple" color="black" colorText="#ffffff" />
      <Button label="Create New Account" color="#797171" colorText="#ffffff" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});
