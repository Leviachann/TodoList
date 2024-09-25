import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }: { title: string, onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop:"20%",
    backgroundColor: '#4A3780', 
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginHorizontal:15,
    alignItems: 'center',
    marginBottom:20,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
