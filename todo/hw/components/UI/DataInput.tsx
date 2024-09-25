import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CalendarOutlineIcon from './CalendarOutlineIcon'; 
import ClockIcon from './ClockIcon'; 
import DateTimePicker from '@react-native-community/datetimepicker';

const DataInput = ({ title, type, setCustomValue }: any) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [customValue, setCustomValueLocal] = useState('');

  const handleDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date; 
    setShowDatePicker(false);
    setDate(currentDate);
    setCustomValueLocal(currentDate.toLocaleDateString());
    setCustomValue(currentDate); 
  };
  
  const handleTimeChange = (event: any, selectedTime: any) => {
    const currentTime = selectedTime || date; 
    setShowTimePicker(false);
    setDate(currentTime);
    setCustomValueLocal(currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setCustomValue(currentTime); 
  };
  

  const renderIcon = () => {
    if (type === 'date') {
      return (
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.iconContainer}>
          <CalendarOutlineIcon />
        </TouchableOpacity>
      );
    } else if (type === 'time') {
      return (
        <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.iconContainer}>
          <ClockIcon />
        </TouchableOpacity>
      );
    }
    return null; 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder={title} 
          style={[styles.textInput, renderIcon() ? { paddingRight: 40 } : {}]} 
          multiline={type === 'multi'}
          numberOfLines={type === 'multi' ? 7 : 1}
          textAlignVertical={type === 'multi' ? 'top' : 'auto'} 
          value={customValue} 
          onChangeText={(text) => {
            setCustomValueLocal(text); 
            setCustomValue(text); 
          }}
        />
        {renderIcon()}
      </View>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          onChange={handleDateChange}
        />
      )}
      {showTimePicker && (
        <DateTimePicker
          testID="timePicker"
          value={date}
          mode="time"
          is24Hour={true}
          onChange={handleTimeChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  title: {
    fontWeight: '600',
    marginTop:10
  },
  inputContainer: {
    position: 'relative',
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 18,
    paddingLeft: 18,
    marginTop: 6,
    paddingRight: 50, 
    paddingTop: 18,
  },
  iconContainer: {
    position: 'absolute',   
    right: 0, 
    top: '15%',    
    transform: [{ translateY: -12 }], 
  },
});

export default DataInput;
