import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabScreen from './src/component/pages/TabScreen';
import TimeTable from './src/component/UI/molecule/TimeTable';
import {RootStackParamList} from './types/navigation/types';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabScreen"
            component={TabScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TimeTable"
            component={TimeTable}
            options={({route}) => ({
              title: route.params.status + ' 전체시간표',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
