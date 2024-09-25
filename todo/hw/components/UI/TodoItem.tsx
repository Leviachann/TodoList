import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomCheckbox from './CheckBox';
import CalendarIcon from './CalendarIcon'; 
import ListIcon from './ListIcon';
import CupIcon from './CupIcon';

const TodoItem = ({ id, time, title, type, isRead, onChange }:any) => {
  const [checked, setChecked] = useState(isRead);

  useEffect(() => {
    setChecked(isRead);
  }, [isRead]);

  const handleCheckboxChange = (checked: any) => {
    setChecked(checked);
    onChange({ id, checked }); 
  };

  const renderIcon = () => {
    switch (type) {
      case 'Goal':
        return <CupIcon />;
      case 'Task':
        return <ListIcon />;
      case 'Event':
        return <CalendarIcon />;
      default:
        return null; 
    }
  };

  return (
    <View style={styles.todoItemCont}>
      <View style={styles.iconAndTextCont}>
        <View style={checked ? styles.markedIcon : styles.icon}>
          {renderIcon()}
        </View>
        <View style={styles.texts}>
          <Text style={checked ? styles.markedTitle : styles.title}>{title}</Text>
          <Text style={checked ? styles.markedTime : styles.time}>{time}</Text>
        </View>
      </View>
      <CustomCheckbox checked={checked} onChange={handleCheckboxChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  todoItemCont: {
    backgroundColor: '#ffff',
    marginHorizontal: 15,
    paddingVertical: 24,
    paddingLeft: 18,
    flexDirection: 'row',
  },
  iconAndTextCont: {
    flexDirection: 'row',
    width: '85%',
  },
  icon: {
    opacity: 1,
  },
  texts: {
    marginVertical: 8,
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  time: {
    fontWeight: '500',
    color: '#1B1B1D',
  },
  markedTime: {
    fontWeight: '500',
    color: '#afafb0',
    textDecorationLine: 'line-through',
  },
  markedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8d8d8e',
    textDecorationLine: 'line-through',
  },
  markedIcon: {
    opacity: 0.5,
  },
});

export default TodoItem;
