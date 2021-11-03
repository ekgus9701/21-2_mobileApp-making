import React from 'react';
import { View, Text } from 'react-native';

var L=[];

for (var i = 2; i < 10; i++){
  for (var j = 1; j < 10; j++){
      L.push(<Text>{i} x {j} = {i*j}</Text>);
    }
}
  
export default function App() {
 
  return (
    <View style={{ marginTop: 30 }}>{L}</View>
  );
}
