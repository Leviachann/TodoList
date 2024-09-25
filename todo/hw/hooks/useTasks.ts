import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [readTasks, setReadTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const existingTasks = await AsyncStorage.getItem('tasks');
        if (existingTasks) {
          const parsedTasks = JSON.parse(existingTasks);
          const unreadTasks = parsedTasks.filter((task: { status: string; }) => task.status === 'unread');
          const readTasks = parsedTasks.filter((task: { status: string; }) => task.status === 'read');
          setTasks(unreadTasks);
          setReadTasks(readTasks);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const deleteAllTasks = async () => {
    try {
      await AsyncStorage.removeItem('tasks');
      setTasks([]);
      setReadTasks([]);
      console.log("All tasks deleted.");
    } catch (error) {
      console.error("Error deleting tasks:", error);
    }
  };

  const updateTaskStatus = async ({ id, checked }: any) => {
    try {
      const existingTasks = await AsyncStorage.getItem('tasks');
      if (existingTasks) {
        const parsedTasks = JSON.parse(existingTasks);
        const updatedTasks = parsedTasks.map((t: { id: any }) => 
          t.id === id ? { ...t, status: checked ? 'read' : 'unread' } : t
        );
        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTasks(updatedTasks.filter((t: { status: string }) => t.status === 'unread'));
        setReadTasks(updatedTasks.filter((t: { status: string }) => t.status === 'read'));
      }
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };
  
  
  

  return { tasks, readTasks, deleteAllTasks, updateTaskStatus };
};

export default useTasks;
