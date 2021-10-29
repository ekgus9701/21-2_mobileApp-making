import React from 'react';
import { View, Text } from 'react-native';

var name = 'Ewha';
var element = <Text>Hello{name}</Text>

for (var i = 0; i < 5; i++){
  element = <View style={{ borderWidth: 1, padding: 10 }}>{element}</View>
}

export default function App() {
 
  return (
    <View style={{ marginTop: 30 }}>{element}</View>
  );
}
