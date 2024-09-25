import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const CustomCheckbox = ({ checked = false, onChange }:any) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheckbox = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      <View style={isChecked ? styles.checkBox : styles.emptyCheckBox}>
        {isChecked && <View style={styles.checkmark}></View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    height: 24,
    width: 24,
    marginVertical: 15,
    borderColor: '#4A3780',
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: '#5e4287',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  checkmark: {
    width: 6,
    height: 12,
    borderColor: '#fff',
    borderRightWidth: 4,
    borderBottomWidth: 4,
    transform: [{ rotate: '45deg' }],
  },
  emptyCheckBox: {
    height: 24,
    width: 24,
    marginVertical: 15,
    borderColor: '#4A3780',
    borderWidth: 2,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#fff',
  },
});

export default CustomCheckbox;
