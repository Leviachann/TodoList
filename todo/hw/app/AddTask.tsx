import React, { useState } from 'react';
import CategoryPick from '@/components/UI/CategoryPick';
import CustomButton from '@/components/UI/CustomButton';
import DataInput from '@/components/UI/DataInput';
import { useRouter } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [notes, setNotes] = useState(''); 

  const router = useRouter(); 

  const handleSave = async () => {
    console.log("Save button pressed"); 

    if (!title) {
      console.log("Title not selected");
      if (!selectedCategory) {
        console.log("Category not selected");
      } 
      if (!date) {
        console.log("Date not selected");
      } 
      if (!time) {
        console.log("Time not selected");
      } 
      return;
    }

    const task = {
      id: Date.now().toString(), 
      keyword: title,
      title,
      category: selectedCategory,
      date: date.toLocaleDateString(),
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'unread',
    };
  
    try {
      const existingTasks = await AsyncStorage.getItem('tasks');
      const tasksArray = existingTasks ? JSON.parse(existingTasks) : [];
      tasksArray.push(task);
  
      await AsyncStorage.setItem('tasks', JSON.stringify(tasksArray));
  
      console.log("Saved tasks:", tasksArray);
      
      router.push('/'); 
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <DataInput 
          title="Enter Title" 
          type="default" 
          setCustomValue={setTitle} 
        />
        <CategoryPick 
          setSelectedCategory={setSelectedCategory} 
        />
        <View style={styles.dateContainer}>
          <View style={styles.smallInput}>
            <DataInput 
              title="Date" 
              type="date" 
              setCustomValue={setDate} 
            />
          </View>
          <View style={styles.smallInput}>
            <DataInput 
              title="Time" 
              type="time" 
              setCustomValue={setTime} 
            />
          </View>
        </View>
        <DataInput 
          title="Notes" 
          type="multi" 
          setCustomValue={setNotes} 
        />
        <CustomButton  
          onPress={handleSave} 
          title='Save' 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { 
    backgroundColor: '#f1f5f9' 
  },
  dateContainer: {
    flexDirection: 'row', 
    marginTop: 20,
  },
  smallInput: {
    width: '50%'
  },
});
