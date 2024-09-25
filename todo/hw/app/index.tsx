import React from 'react';
import CustomButton from '@/components/UI/CustomButton';
import TodoItem from '@/components/UI/TodoItem';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router'; 
import useTasks from '@/hooks/useTasks';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const router = useRouter();
  const { tasks, readTasks, deleteAllTasks, updateTaskStatus } = useTasks();

  const renderTaskItem = ({ item }: any) => (
    <TodoItem 
      key={item.id}
      id={item.id}
      title={item.title}
      time={item.time}
      type={item.category}
      isRead={item.status === 'read'}
      onChange={updateTaskStatus}
    />
  );

  return (
    <GestureHandlerRootView style={styles.gesture}>
      <SafeAreaView style={styles.safearea}>
        <Text style={styles.mainTitle}>My Todo List</Text>
        <View style={{ backgroundColor: '#f1f5f9', flex: 1 }}>
          
          <FlatList 
            data={tasks}
            renderItem={renderTaskItem}
            keyExtractor={(item :any) => item.id}
            contentContainerStyle={{  marginTop:20 }}
          />

          <FlatList 
            data={readTasks}
            renderItem={renderTaskItem}
            keyExtractor={(item :any) => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListHeaderComponent={() => (
              <Text style={styles.listHeader}>Completed</Text>
            )}
            //listi temizlemek ucun saxlamisam lazim olsa
            // ListFooterComponent={() => (
            //   <CustomButton
            //     onPress={deleteAllTasks}
            //     title="Delete All Tasks"
            //   />
            // )}
          />
          
                
        <CustomButton
          onPress={() => {
          router.push('/AddTask');
          }}
          title="Add new Task"
        />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gesture: {
    flex: 1,
  },
  safearea: {
    flex: 1,
    backgroundColor: '#4A3780',
  },
  mainTitle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 15,
    color:'#ffff'
  },
  listHeader: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 18,
    marginTop: 18,
    marginBottom:10,
  },
  
});
