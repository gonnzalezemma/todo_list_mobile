import * as React from 'react';
import HomeScreen from './src/views/HomeScreen';
import DetailsScreens from './src/views/DetailsScreens';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailsScreens" component={DetailsScreens} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;