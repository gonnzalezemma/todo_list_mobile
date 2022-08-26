import * as React from 'react';
import { View, Text, Button } from 'react-native';
import ListCheck from '../components/list';
import Example from '../components/list.js'
function DetailsScreens({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      <ListCheck/>
      </View>
    );
  }

export default DetailsScreens;