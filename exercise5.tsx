import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import Title from './components/Title';
import TextInput from './components/TextInput';
import Button from './components/Button';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Title text="Welcome" />

          <View style={styles.formContainer}>
            <TextInput
              label="Username"
              placeholder="Masukan username anda"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
            <TextInput
              label="Password"
              placeholder="Masukan password anda"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Button
              label="Sign in"
              color="#e26709"
              colorText="white"
              onPress={handleSignIn}
            />
            <Button label="Sign in Google" color="red" colorText="white" />
            <Button label="Sign in Facebook" color="blue" colorText="white" />
            <Button label="Sign in Apple" color="black" colorText="white" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'Flex-start',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  formContainer: {
    marginBottom: 30,
  },
});
