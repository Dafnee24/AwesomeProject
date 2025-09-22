import React from 'react';
import {TextInput as Input, Text, StyleSheet} from 'react-native';

const TextInput = ({placeholder, label, ...rest}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.input} placeholder={placeholder} {...rest} />
    </>
  );
};
export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    fontSize: 14,
    color: 'black',
  },
});
