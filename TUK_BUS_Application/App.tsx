import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types/navigation/types';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TabScreen from './src/component/navigation/TabScreen';
import {StatusBar} from 'react-native';
const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabScreen"
            component={TabScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
