import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

type TitleProps = {
  text: string;
};

const Title = ({text}: TitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    alignItems: 'flex-starcenter',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
});
