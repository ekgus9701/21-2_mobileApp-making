import React from 'react';
import { View, Text } from 'react-native';

var L=[];

for (var i = 0; i < 10; i++)
  L.push(<Text>{i} {i*i}</Text>);

export default function App() {
 
  return (
    <View style={{ marginTop: 30 }}>{L}</View>
  );
}
