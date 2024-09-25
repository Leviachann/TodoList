import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ListIcon from './ListIcon';
import CalendarIcon from './CalendarIcon';
import CupIcon from './CupIcon';

const CategoryPick = ({ setSelectedCategory }:any) => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconPress = (iconName:any) => {
    setSelectedIcon(iconName);
    setSelectedCategory(iconName); 
    console.log("Selected icon:", iconName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category: </Text>
      <TouchableOpacity 
        style={{ opacity: selectedIcon === 'Task' ? 0.5 : 1, borderColor: '#ffff', borderWidth: 3, borderRadius: 100, marginLeft: 20 }}
        onPress={() => handleIconPress('Task')}
      >
        <ListIcon />
      </TouchableOpacity>
      <TouchableOpacity 
        style={{ opacity: selectedIcon === 'Event' ? 0.5 : 1, borderColor: '#ffff', borderWidth: 3, borderRadius: 100, marginLeft: 20 }}
        onPress={() => handleIconPress('Event')}
      >
        <CalendarIcon />
      </TouchableOpacity>
      <TouchableOpacity 
        style={{ opacity: selectedIcon === 'Goal' ? 0.5 : 1, borderColor: '#ffff', borderWidth: 3, borderRadius: 100, marginLeft: 20 }}
        onPress={() => handleIconPress('Goal')}
      >
        <CupIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 20,
  },
  text: {
    fontWeight: '600',
    marginVertical: 18,
  },
});

export default CategoryPick;
