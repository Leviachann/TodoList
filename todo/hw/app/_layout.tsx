import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { Stack, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { Button, Text } from 'react-native';
import getDate from '@/hooks/getDate';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [currentDate, setCurrentDate] = useState(getDate());
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(getDate());
    }, 1000 * 60 * 60 * 24);
    return () => clearInterval(interval);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}> 
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: currentDate,
            headerStyle: {
              backgroundColor: '#4A3780', 
            
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{ backgroundColor: '#ffff', paddingHorizontal: 20,paddingVertical: 16, borderRadius: 100, marginVertical:20, marginRight:20 }}
                onPress={() => {
                  router.push('/');
                }}
              >
                <Text style={{ color: '#14142B' }}>V</Text>
              </TouchableOpacity>
            ),
            headerTintColor: '#ffffff', 
          }}
        />
        <Stack.Screen
          name="AddTask"
          options={{
            title: 'Add New Task',
            headerStyle: {
              backgroundColor: '#4A3780', 
            
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{ backgroundColor: '#ffff', paddingHorizontal: 20,paddingVertical: 16, borderRadius: 100, marginVertical:20, marginRight:20 }}
                onPress={() => {
                  router.push('/');
                }}
              >
                <Text style={{ color: '#14142B' }}>X</Text>
              </TouchableOpacity>
            ),
            headerTintColor: '#ffffff', 
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
