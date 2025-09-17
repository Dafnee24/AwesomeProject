import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({label, color = 'black'}) => {
  return <Text style={[styles.title, {color}]}>{label}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
