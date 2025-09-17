import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Button = ({label, color = 'orange', colorText = 'black', onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button(color)}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.buttonText(colorText)}>{label}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  }),
  buttonText: colorText => ({
    color: colorText,
    fontWeight: 'bold',
    fontSize: 16,
  }),
});
